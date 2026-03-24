-- DropIndex
DROP INDEX "CellValue_fieldId_idx";

-- DropIndex
DROP INDEX "CellValue_recordId_idx";

-- AlterTable
ALTER TABLE "CellValue" ADD COLUMN     "numberValue" DOUBLE PRECISION,
ADD COLUMN     "textValue" TEXT;

-- CreateIndex
CREATE INDEX "CellValue_fieldId_textValue_idx" ON "CellValue"("fieldId", "textValue");

-- CreateIndex
CREATE INDEX "CellValue_fieldId_numberValue_idx" ON "CellValue"("fieldId", "numberValue");
