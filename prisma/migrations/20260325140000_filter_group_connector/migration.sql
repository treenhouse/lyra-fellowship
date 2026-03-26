-- AlterTable: add connector to ViewFilterGroup
ALTER TABLE "ViewFilterGroup" ADD COLUMN "connector" TEXT NOT NULL DEFAULT 'and';
