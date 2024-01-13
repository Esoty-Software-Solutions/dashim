import { t, publicProcedure } from "./helpers/createRouter";
import { TimeWindowAggregateSchema } from "../schemas/aggregateTimeWindow.schema";
import { TimeWindowCreateManySchema } from "../schemas/createManyTimeWindow.schema";
import { TimeWindowCreateOneSchema } from "../schemas/createOneTimeWindow.schema";
import { TimeWindowDeleteManySchema } from "../schemas/deleteManyTimeWindow.schema";
import { TimeWindowDeleteOneSchema } from "../schemas/deleteOneTimeWindow.schema";
import { TimeWindowFindFirstSchema } from "../schemas/findFirstTimeWindow.schema";
import { TimeWindowFindManySchema } from "../schemas/findManyTimeWindow.schema";
import { TimeWindowFindUniqueSchema } from "../schemas/findUniqueTimeWindow.schema";
import { TimeWindowGroupBySchema } from "../schemas/groupByTimeWindow.schema";
import { TimeWindowUpdateManySchema } from "../schemas/updateManyTimeWindow.schema";
import { TimeWindowUpdateOneSchema } from "../schemas/updateOneTimeWindow.schema";
import { TimeWindowUpsertSchema } from "../schemas/upsertOneTimeWindow.schema";

export const timewindowsRouter = t.router({
  aggregateTimeWindow: publicProcedure
    .input(TimeWindowAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTimeWindow = await ctx.prisma.timeWindow.aggregate(input);
      return aggregateTimeWindow;
    }),
  createManyTimeWindow: publicProcedure
    .input(TimeWindowCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTimeWindow = await ctx.prisma.timeWindow.createMany(input);
      return createManyTimeWindow;
    }),
  createOneTimeWindow: publicProcedure
    .input(TimeWindowCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTimeWindow = await ctx.prisma.timeWindow.create(input);
      return createOneTimeWindow;
    }),
  deleteManyTimeWindow: publicProcedure
    .input(TimeWindowDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTimeWindow = await ctx.prisma.timeWindow.deleteMany(input);
      return deleteManyTimeWindow;
    }),
  deleteOneTimeWindow: publicProcedure
    .input(TimeWindowDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTimeWindow = await ctx.prisma.timeWindow.delete(input);
      return deleteOneTimeWindow;
    }),
  findFirstTimeWindow: publicProcedure
    .input(TimeWindowFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTimeWindow = await ctx.prisma.timeWindow.findFirst(input);
      return findFirstTimeWindow;
    }),
  findFirstTimeWindowOrThrow: publicProcedure
    .input(TimeWindowFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTimeWindowOrThrow = await ctx.prisma.timeWindow.findFirstOrThrow(input);
      return findFirstTimeWindowOrThrow;
    }),
  findManyTimeWindow: publicProcedure
    .input(TimeWindowFindManySchema).query(async ({ ctx, input }) => {
      const findManyTimeWindow = await ctx.prisma.timeWindow.findMany(input);
      return findManyTimeWindow;
    }),
  findUniqueTimeWindow: publicProcedure
    .input(TimeWindowFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTimeWindow = await ctx.prisma.timeWindow.findUnique(input);
      return findUniqueTimeWindow;
    }),
  findUniqueTimeWindowOrThrow: publicProcedure
    .input(TimeWindowFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTimeWindowOrThrow = await ctx.prisma.timeWindow.findUniqueOrThrow(input);
      return findUniqueTimeWindowOrThrow;
    }),
  groupByTimeWindow: publicProcedure
    .input(TimeWindowGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTimeWindow = await ctx.prisma.timeWindow.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTimeWindow;
    }),
  updateManyTimeWindow: publicProcedure
    .input(TimeWindowUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTimeWindow = await ctx.prisma.timeWindow.updateMany(input);
      return updateManyTimeWindow;
    }),
  updateOneTimeWindow: publicProcedure
    .input(TimeWindowUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTimeWindow = await ctx.prisma.timeWindow.update(input);
      return updateOneTimeWindow;
    }),
  upsertOneTimeWindow: publicProcedure
    .input(TimeWindowUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTimeWindow = await ctx.prisma.timeWindow.upsert(input);
      return upsertOneTimeWindow;
    }),

}) 
