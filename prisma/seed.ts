import "dotenv/config";
import { PrismaClient, FieldType, SortDirection } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Upsert user so re-running seed doesn't fail on unique email
  const user = await prisma.user.upsert({
    where: { email: "delia@example.com" },
    create: {
      email: "delia@example.com",
      name: "Delia",
    },
    update: { name: "Delia" },
  });

  // Remove existing demo base so we can re-seed cleanly (cascades delete tables, records, etc.)
  await prisma.base.deleteMany({
    where: { ownerId: user.id, name: "Project Tracker" },
  });

  // Create base
  const base = await prisma.base.create({
    data: {
      name: "Project Tracker",
      ownerId: user.id,
    },
  });

  // Add membership
  await prisma.baseMember.create({
    data: {
      baseId: base.id,
      userId: user.id,
    },
  });

  // Create table
  const table = await prisma.table.create({
    data: {
      name: "Tasks",
      baseId: base.id,
      createdById: user.id,
    },
  });

  // Create fields
  const nameField = await prisma.field.create({
    data: {
      name: "Name",
      type: FieldType.text,
      position: 1,
      tableId: table.id,
    },
  });

  const priorityField = await prisma.field.create({
    data: {
      name: "Priority",
      type: FieldType.number,
      position: 2,
      tableId: table.id,
    },
  });

  // Create records
  const record1 = await prisma.record.create({
    data: {
      tableId: table.id,
      userId: user.id,
      position: 1,
    },
  });

  const record2 = await prisma.record.create({
    data: {
      tableId: table.id,
      userId: user.id,
      position: 2,
    },
  });

  // Create cell values
  await prisma.cellValue.createMany({
    data: [
      {
        recordId: record1.id,
        fieldId: nameField.id,
        value: "Build Airtable clone",
      },
      {
        recordId: record1.id,
        fieldId: priorityField.id,
        value: 1,
      },
      {
        recordId: record2.id,
        fieldId: nameField.id,
        value: "Write documentation",
      },
      {
        recordId: record2.id,
        fieldId: priorityField.id,
        value: 2,
      },
    ],
  });

  // Create view
  const view = await prisma.view.create({
    data: {
      name: "All Tasks",
      tableId: table.id,
    },
  });

  // Create view sort
  await prisma.viewSort.create({
    data: {
      viewId: view.id,
      fieldId: priorityField.id,
      direction: SortDirection.asc,
      order: 1,
    },
  });

  console.log("🌱 Database seeded");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });