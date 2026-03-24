import { baseRouter } from "~/server/api/routers/base";
import { cellRouter } from "~/server/api/routers/cell";
import { fieldRouter } from "~/server/api/routers/field";
import { memberRouter } from "~/server/api/routers/member";
import { recordRouter } from "~/server/api/routers/record";
import { tableRouter } from "~/server/api/routers/table";
import { viewRouter } from "~/server/api/routers/view";
import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  base: baseRouter,
  cell: cellRouter,
  field: fieldRouter,
  member: memberRouter,
  record: recordRouter,
  table: tableRouter,
  view: viewRouter,
});

export type AppRouter = typeof appRouter;

export const createCaller = createCallerFactory(appRouter);
