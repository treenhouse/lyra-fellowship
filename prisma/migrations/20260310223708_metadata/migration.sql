/*
  Warnings:

  - Added the required column `updatedAt` to the `Table` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Record" ADD COLUMN     "position" INTEGER;

-- AlterTable
ALTER TABLE "Table" ADD COLUMN     "createdById" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ViewSort" ADD COLUMN     "order" INTEGER;

-- AddForeignKey
ALTER TABLE "Table" ADD CONSTRAINT "Table_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
