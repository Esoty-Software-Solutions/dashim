import { t, publicProcedure } from "./helpers/createRouter";
import { FingerTypeAggregateSchema } from "../schemas/aggregateFingerType.schema";
import { FingerTypeCreateManySchema } from "../schemas/createManyFingerType.schema";
import { FingerTypeCreateOneSchema } from "../schemas/createOneFingerType.schema";
import { FingerTypeDeleteManySchema } from "../schemas/deleteManyFingerType.schema";
import { FingerTypeDeleteOneSchema } from "../schemas/deleteOneFingerType.schema";
import { FingerTypeFindFirstSchema } from "../schemas/findFirstFingerType.schema";
import { FingerTypeFindManySchema } from "../schemas/findManyFingerType.schema";
import { FingerTypeFindUniqueSchema } from "../schemas/findUniqueFingerType.schema";
import { FingerTypeGroupBySchema } from "../schemas/groupByFingerType.schema";
import { FingerTypeUpdateManySchema } from "../schemas/updateManyFingerType.schema";
import { FingerTypeUpdateOneSchema } from "../schemas/updateOneFingerType.schema";
import { FingerTypeUpsertSchema } from "../schemas/upsertOneFingerType.schema";

export const fingertypesRouter = t.router({
  aggregateFingerType: publicProcedure
    .input(FingerTypeAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateFingerType = await ctx.prisma.fingerType.aggregate(input);
      return aggregateFingerType;
    }),
  createManyFingerType: publicProcedure
    .input(FingerTypeCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyFingerType = await ctx.prisma.fingerType.createMany(input);
      return createManyFingerType;
    }),
  createOneFingerType: publicProcedure
    .input(FingerTypeCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneFingerType = await ctx.prisma.fingerType.create(input);
      return createOneFingerType;
    }),
  deleteManyFingerType: publicProcedure
    .input(FingerTypeDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyFingerType = await ctx.prisma.fingerType.deleteMany(input);
      return deleteManyFingerType;
    }),
  deleteOneFingerType: publicProcedure
    .input(FingerTypeDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneFingerType = await ctx.prisma.fingerType.delete(input);
      return deleteOneFingerType;
    }),
  findFirstFingerType: publicProcedure
    .input(FingerTypeFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstFingerType = await ctx.prisma.fingerType.findFirst(input);
      return findFirstFingerType;
    }),
  findFirstFingerTypeOrThrow: publicProcedure
    .input(FingerTypeFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstFingerTypeOrThrow = await ctx.prisma.fingerType.findFirstOrThrow(input);
      return findFirstFingerTypeOrThrow;
    }),
  findManyFingerType: publicProcedure
    .input(FingerTypeFindManySchema).query(async ({ ctx, input }) => {
      const findManyFingerType = await ctx.prisma.fingerType.findMany(input);
      return findManyFingerType;
    }),
  findUniqueFingerType: publicProcedure
    .input(FingerTypeFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueFingerType = await ctx.prisma.fingerType.findUnique(input);
      return findUniqueFingerType;
    }),
  findUniqueFingerTypeOrThrow: publicProcedure
    .input(FingerTypeFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueFingerTypeOrThrow = await ctx.prisma.fingerType.findUniqueOrThrow(input);
      return findUniqueFingerTypeOrThrow;
    }),
  groupByFingerType: publicProcedure
    .input(FingerTypeGroupBySchema).query(async ({ ctx, input }) => {
      const groupByFingerType = await ctx.prisma.fingerType.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByFingerType;
    }),
  updateManyFingerType: publicProcedure
    .input(FingerTypeUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyFingerType = await ctx.prisma.fingerType.updateMany(input);
      return updateManyFingerType;
    }),
  updateOneFingerType: publicProcedure
    .input(FingerTypeUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneFingerType = await ctx.prisma.fingerType.update(input);
      return updateOneFingerType;
    }),
  upsertOneFingerType: publicProcedure
    .input(FingerTypeUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneFingerType = await ctx.prisma.fingerType.upsert(input);
      return upsertOneFingerType;
    }),

}) 
