/*
  Warnings:

  - You are about to drop the column `numberValue` on the `CellValue` table. All the data in the column will be lost.
  - You are about to drop the column `textValue` on the `CellValue` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `CellValue` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ViewFilter" DROP CONSTRAINT "ViewFilter_fieldId_fkey";

-- DropForeignKey
ALTER TABLE "ViewSort" DROP CONSTRAINT "ViewSort_fieldId_fkey";

-- DropIndex
DROP INDEX "CellValue_fieldId_numberValue_idx";

-- DropIndex
DROP INDEX "CellValue_fieldId_textValue_idx";

-- AlterTable
ALTER TABLE "CellValue" DROP COLUMN "numberValue",
DROP COLUMN "textValue",
DROP COLUMN "value",
ADD COLUMN     "valueNumber" DOUBLE PRECISION,
ADD COLUMN     "valueText" TEXT;

-- CreateIndex
CREATE INDEX "CellValue_fieldId_idx" ON "CellValue"("fieldId");

-- CreateIndex
CREATE INDEX "CellValue_recordId_idx" ON "CellValue"("recordId");

-- CreateIndex
CREATE INDEX "CellValue_fieldId_valueText_idx" ON "CellValue"("fieldId", "valueText");

-- CreateIndex
CREATE INDEX "CellValue_fieldId_valueNumber_idx" ON "CellValue"("fieldId", "valueNumber");

-- AddForeignKey
ALTER TABLE "ViewFilter" ADD CONSTRAINT "ViewFilter_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ViewSort" ADD CONSTRAINT "ViewSort_fieldId_fkey" FOREIGN KEY ("fieldId") REFERENCES "Field"("id") ON DELETE CASCADE ON UPDATE CASCADE;
