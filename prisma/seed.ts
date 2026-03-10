import { PrismaClient, FieldType, SortDirection } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  // Create user
  const user = await prisma.user.create({
    data: {
      email: "delia@example.com",
      name: "Delia",
    },
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

  // Create record
  const record = await prisma.record.create({
    data: {
      tableId: table.id,
      userId: user.id,
    },
  });

  // Create cell values
  await prisma.cellValue.createMany({
    data: [
      {
        recordId: record.id,
        fieldId: nameField.id,
        value: "Build Airtable clone",
      },
      {
        recordId: record.id,
        fieldId: priorityField.id,
        value: 1,
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