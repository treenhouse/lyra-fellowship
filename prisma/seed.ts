// prisma/seed.ts
import "dotenv/config";
import { PrismaClient, FieldType, SortDirection } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // ─── Users ──────────────────────────────────────────────────────────────────
  const delia = await prisma.user.upsert({
    where: { email: "delia@example.com" },
    update: { name: "Delia" },
    create: { email: "delia@example.com", name: "Delia" },
  });

  const marco = await prisma.user.upsert({
    where: { email: "marco@example.com" },
    update: { name: "Marco" },
    create: { email: "marco@example.com", name: "Marco" },
  });

  const priya = await prisma.user.upsert({
    where: { email: "priya@example.com" },
    update: { name: "Priya" },
    create: { email: "priya@example.com", name: "Priya" },
  });

  // ─── Clean previous seed data ────────────────────────────────────────────────
  await prisma.base.deleteMany({
    where: {
      // ownerId: { in: [delia.id, marco.id, priya.id] },
      name: { in: ["Project Tracker", "Marketing Hub", "Bug Tracker", "Hiring Pipeline"] },
    },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // BASE 1 — "Project Tracker"  (owner: Delia, member: Marco)
  // Tests: owner-only ops, shared member access
  // ═══════════════════════════════════════════════════════════════════════════
  const projectBase = await prisma.base.create({
    data: { 
      name: "Project Tracker", 
      // ownerId: delia.id  
     },
  });
  await prisma.baseMember.createMany({
    data: [
      { baseId: projectBase.id, userId: delia.id },
      { baseId: projectBase.id, userId: marco.id }, // member, not owner
    ],
  });

  const tasksTable = await prisma.table.create({
    data: { name: "Tasks", baseId: projectBase.id, createdById: delia.id },
  });

  const [taskName, taskPriority, taskStatus, taskAssignee] = await Promise.all([
    prisma.field.create({ data: { name: "Name",     type: FieldType.text,   position: 0, tableId: tasksTable.id } }),
    prisma.field.create({ data: { name: "Priority", type: FieldType.number, position: 1, tableId: tasksTable.id } }),
    prisma.field.create({ data: { name: "Status",   type: FieldType.text,   position: 2, tableId: tasksTable.id } }),
    prisma.field.create({ data: { name: "Assignee", type: FieldType.text,   position: 3, tableId: tasksTable.id } }),
  ]);

  const taskRows = [
    { name: "Build Airtable clone",    priority: 1, status: "In Progress", assignee: "Delia" },
    { name: "Write documentation",      priority: 2, status: "Todo",        assignee: "Marco" },
    { name: "Set up CI/CD pipeline",    priority: 1, status: "Done",        assignee: "Delia" },
    { name: "Design system audit",      priority: 3, status: "Todo",        assignee: "Marco" },
    { name: "Fix pagination bug",       priority: 1, status: "In Progress", assignee: "Delia" },
    { name: "Write unit tests",         priority: 2, status: "Todo",        assignee: "Marco" },
    { name: "Deploy to staging",        priority: 2, status: "Done",        assignee: "Delia" },
    { name: "Performance profiling",    priority: 3, status: "Todo",        assignee: "Marco" },
  ];

  for (const [i, row] of taskRows.entries()) {
    const record = await prisma.record.create({
      data: { tableId: tasksTable.id, userId: delia.id, position: i },
    });
    await prisma.cellValue.createMany({
      data: [
        { recordId: record.id, fieldId: taskName.id,     valueText: row.name, valueNumber: null },
        { recordId: record.id, fieldId: taskPriority.id, valueText: null, valueNumber: row.priority },
        { recordId: record.id, fieldId: taskStatus.id,   valueText: row.status, valueNumber: null },
        { recordId: record.id, fieldId: taskAssignee.id, valueText: row.assignee, valueNumber: null },
      ],
    });
  }

  const sprintsTable = await prisma.table.create({
    data: { name: "Sprints", baseId: projectBase.id, createdById: delia.id },
  });

  const [sprintName, sprintGoal, sprintVelocity] = await Promise.all([
    prisma.field.create({ data: { name: "Sprint",   type: FieldType.text,   position: 0, tableId: sprintsTable.id } }),
    prisma.field.create({ data: { name: "Goal",     type: FieldType.text,   position: 1, tableId: sprintsTable.id } }),
    prisma.field.create({ data: { name: "Velocity", type: FieldType.number, position: 2, tableId: sprintsTable.id } }),
  ]);

  for (const [i, row] of [
    { sprint: "Sprint 1", goal: "Auth + base CRUD",     velocity: 34 },
    { sprint: "Sprint 2", goal: "Table & field editor", velocity: 41 },
    { sprint: "Sprint 3", goal: "Record grid view",     velocity: 38 },
  ].entries()) {
    const r = await prisma.record.create({ data: { tableId: sprintsTable.id, position: i } });
    await prisma.cellValue.createMany({
      data: [
        { recordId: r.id, fieldId: sprintName.id,    valueText: row.sprint, valueNumber: null },
        { recordId: r.id, fieldId: sprintGoal.id,    valueText: row.goal, valueNumber: null },
        { recordId: r.id, fieldId: sprintVelocity.id, valueText: null, valueNumber: row.velocity },
      ],
    });
  }

  // Views for Tasks table
  const allTasksView = await prisma.view.create({ data: { name: "All Tasks", tableId: tasksTable.id } });
  const highPriorityView = await prisma.view.create({ data: { name: "High Priority", tableId: tasksTable.id } });

  await prisma.viewSort.create({
    data: { viewId: allTasksView.id, fieldId: taskPriority.id, direction: SortDirection.asc, order: 0 },
  });
  await prisma.viewFilter.create({
    data: { viewId: highPriorityView.id, fieldId: taskPriority.id, value: 1 },
  });
  await prisma.viewSort.create({
    data: { viewId: highPriorityView.id, fieldId: taskPriority.id, direction: SortDirection.asc, order: 0 },
  });

  // ═══════════════════════════════════════════════════════════════════════════
  // BASE 2 — "Marketing Hub"  (owner: Marco, member: Priya)
  // Tests: a second owner, cross-user membership
  // ═══════════════════════════════════════════════════════════════════════════
  const marketingBase = await prisma.base.create({
    data: { 
      name: "Marketing Hub", 
      // ownerId: marco.id 
    },
  });
  await prisma.baseMember.createMany({
    data: [
      { baseId: marketingBase.id, userId: marco.id },
      { baseId: marketingBase.id, userId: priya.id },
    ],
  });

  const campaignsTable = await prisma.table.create({
    data: { name: "Campaigns", baseId: marketingBase.id, createdById: marco.id },
  });

  const [campName, campChannel, campBudget, campStatus] = await Promise.all([
    prisma.field.create({ data: { name: "Campaign", type: FieldType.text,   position: 0, tableId: campaignsTable.id } }),
    prisma.field.create({ data: { name: "Channel",  type: FieldType.text,   position: 1, tableId: campaignsTable.id } }),
    prisma.field.create({ data: { name: "Budget",   type: FieldType.number, position: 2, tableId: campaignsTable.id } }),
    prisma.field.create({ data: { name: "Status",   type: FieldType.text,   position: 3, tableId: campaignsTable.id } }),
  ]);

  for (const [i, row] of [
    { campaign: "Q1 Launch",      channel: "Email",    budget: 5000,  status: "Active"    },
    { campaign: "Spring Sale",    channel: "Social",   budget: 8000,  status: "Planned"   },
    { campaign: "Referral Drive", channel: "Referral", budget: 2000,  status: "Active"    },
    { campaign: "SEO Push",       channel: "Organic",  budget: 3500,  status: "Completed" },
    { campaign: "Webinar Series", channel: "Email",    budget: 1500,  status: "Planned"   },
  ].entries()) {
    const r = await prisma.record.create({ data: { tableId: campaignsTable.id, userId: marco.id, position: i } });
    await prisma.cellValue.createMany({
      data: [
        { recordId: r.id, fieldId: campName.id,    valueText: row.campaign, valueNumber: null },
        { recordId: r.id, fieldId: campChannel.id, valueText: row.channel, valueNumber: null },
        { recordId: r.id, fieldId: campBudget.id,  valueText: null, valueNumber: row.budget },
        { recordId: r.id, fieldId: campStatus.id,  valueText: row.status, valueNumber: null },
      ],
    });
  }

  await prisma.view.create({ data: { name: "All Campaigns", tableId: campaignsTable.id } });

  // ═══════════════════════════════════════════════════════════════════════════
  // BASE 3 — "Bug Tracker"  (owner: Priya, NO other members)
  // Tests: private base — Delia & Marco should NOT see this
  // ═══════════════════════════════════════════════════════════════════════════
  const bugBase = await prisma.base.create({
    data: { 
      name: "Bug Tracker", 
      // ownerId: priya.id 
    },
  });
  await prisma.baseMember.create({ data: { baseId: bugBase.id, userId: priya.id } });

  const bugsTable = await prisma.table.create({
    data: { name: "Bugs", baseId: bugBase.id, createdById: priya.id },
  });

  const [bugTitle, bugSeverity, bugReporter] = await Promise.all([
    prisma.field.create({ data: { name: "Title",    type: FieldType.text,   position: 0, tableId: bugsTable.id } }),
    prisma.field.create({ data: { name: "Severity", type: FieldType.number, position: 1, tableId: bugsTable.id } }),
    prisma.field.create({ data: { name: "Reporter", type: FieldType.text,   position: 2, tableId: bugsTable.id } }),
  ]);

  for (const [i, row] of [
    { title: "Login redirect loop",     severity: 1, reporter: "Priya" },
    { title: "Cell value not saving",   severity: 1, reporter: "Priya" },
    { title: "Sort order resets",       severity: 2, reporter: "Priya" },
    { title: "Missing field on mobile", severity: 3, reporter: "Priya" },
  ].entries()) {
    const r = await prisma.record.create({ data: { tableId: bugsTable.id, userId: priya.id, position: i } });
    await prisma.cellValue.createMany({
      data: [
        { recordId: r.id, fieldId: bugTitle.id,    valueText: row.title, valueNumber: null },
        { recordId: r.id, fieldId: bugSeverity.id, valueText: null, valueNumber: row.severity },
        { recordId: r.id, fieldId: bugReporter.id, valueText: row.reporter, valueNumber: null },
      ],
    });
  }

  await prisma.view.create({ data: { name: "All Bugs", tableId: bugsTable.id } });

  // ═══════════════════════════════════════════════════════════════════════════
  // BASE 4 — "Hiring Pipeline"  (owner: Delia, members: Marco + Priya)
  // Tests: all three users share a base
  // ═══════════════════════════════════════════════════════════════════════════
  const hiringBase = await prisma.base.create({
    data: { 
      name: "Hiring Pipeline", 
      // ownerId: delia.id 
    },
  });
  await prisma.baseMember.createMany({
    data: [
      { baseId: hiringBase.id, userId: delia.id },
      { baseId: hiringBase.id, userId: marco.id },
      { baseId: hiringBase.id, userId: priya.id },
    ],
  });

  const candidatesTable = await prisma.table.create({
    data: { name: "Candidates", baseId: hiringBase.id, createdById: delia.id },
  });

  const [candName, candRole, candStage, candScore] = await Promise.all([
    prisma.field.create({ data: { name: "Name",  type: FieldType.text,   position: 0, tableId: candidatesTable.id } }),
    prisma.field.create({ data: { name: "Role",  type: FieldType.text,   position: 1, tableId: candidatesTable.id } }),
    prisma.field.create({ data: { name: "Stage", type: FieldType.text,   position: 2, tableId: candidatesTable.id } }),
    prisma.field.create({ data: { name: "Score", type: FieldType.number, position: 3, tableId: candidatesTable.id } }),
  ]);

  for (const [i, row] of [
    { name: "Alice Chen",    role: "Engineer",   stage: "Offer",      score: 95 },
    { name: "Bob Martin",    role: "Designer",   stage: "Interview",  score: 82 },
    { name: "Carol White",   role: "Engineer",   stage: "Screen",     score: 78 },
    { name: "David Kim",     role: "PM",         stage: "Interview",  score: 88 },
    { name: "Eva Rossi",     role: "Designer",   stage: "Applied",    score: 71 },
    { name: "Frank Okafor",  role: "Engineer",   stage: "Interview",  score: 84 },
  ].entries()) {
    const r = await prisma.record.create({ data: { tableId: candidatesTable.id, userId: delia.id, position: i } });
    await prisma.cellValue.createMany({
      data: [
        { recordId: r.id, fieldId: candName.id,  valueText: row.name, valueNumber: null },
        { recordId: r.id, fieldId: candRole.id,  valueText: row.role, valueNumber: null },
        { recordId: r.id, fieldId: candStage.id, valueText: row.stage, valueNumber: null },
        { recordId: r.id, fieldId: candScore.id, valueText: null, valueNumber: row.score },
      ],
    });
  }

  const allCandView  = await prisma.view.create({ data: { name: "All Candidates",  tableId: candidatesTable.id } });
  const topScoreView = await prisma.view.create({ data: { name: "Top Candidates",  tableId: candidatesTable.id } });

  await prisma.viewSort.create({
    data: { viewId: allCandView.id, fieldId: candScore.id, direction: SortDirection.desc, order: 0 },
  });
  await prisma.viewFilter.create({
    data: { viewId: topScoreView.id, fieldId: candScore.id, value: 85 },
  });
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());