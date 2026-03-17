-- AlterTable
ALTER TABLE "ViewFilter" ADD COLUMN IF NOT EXISTS "operator" TEXT NOT NULL DEFAULT 'equals';
