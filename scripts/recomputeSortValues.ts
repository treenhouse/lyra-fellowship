import { PrismaClient } from "../generated/prisma";

const db = new PrismaClient();

async function main() {
  const tableId = "YOUR_TABLE_ID";
  const sortFieldId = "YOUR_SORT_FIELD_ID";

  // 1️⃣ get all records + relevant cells
  const records = await db.record.findMany({
    where: { tableId },
    include: {
      cells: {
        where: { fieldId: sortFieldId },
      },
    },
  });

  // 2️⃣ get field type
  const field = await db.field.findUnique({
    where: { id: sortFieldId },
  });

  if (!field) throw new Error("Field not found");

  // 3️⃣ recompute
  for (const r of records) {
    const cell = r.cells[0];

    await db.record.update({
      where: { id: r.id },
      data: {
        sortValueText:
          field.type === "text" ? cell?.valueText ?? null : null,
        sortValueNumber:
          field.type === "number" ? cell?.valueNumber ?? null : null,
      },
    });
  }

  console.log("✅ recompute done");
}

await main().finally(() => db.$disconnect());