-- AlterTable: add groupId and position to ViewFilter
ALTER TABLE "ViewFilter" ADD COLUMN "groupId" TEXT;
ALTER TABLE "ViewFilter" ADD COLUMN "position" INTEGER;

-- CreateTable: ViewFilterGroup
CREATE TABLE "ViewFilterGroup" (
    "id" TEXT NOT NULL,
    "viewId" TEXT NOT NULL,
    "conjunction" TEXT NOT NULL DEFAULT 'and',
    "position" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "ViewFilterGroup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey: ViewFilterGroup -> View
ALTER TABLE "ViewFilterGroup" ADD CONSTRAINT "ViewFilterGroup_viewId_fkey"
    FOREIGN KEY ("viewId") REFERENCES "View"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey: ViewFilter -> ViewFilterGroup
ALTER TABLE "ViewFilter" ADD CONSTRAINT "ViewFilter_groupId_fkey"
    FOREIGN KEY ("groupId") REFERENCES "ViewFilterGroup"("id") ON DELETE CASCADE ON UPDATE CASCADE;
