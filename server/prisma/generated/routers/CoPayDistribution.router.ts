import { t, publicProcedure } from "./helpers/createRouter";
import { CoPayDistributionAggregateSchema } from "../schemas/aggregateCoPayDistribution.schema";
import { CoPayDistributionCreateManySchema } from "../schemas/createManyCoPayDistribution.schema";
import { CoPayDistributionCreateOneSchema } from "../schemas/createOneCoPayDistribution.schema";
import { CoPayDistributionDeleteManySchema } from "../schemas/deleteManyCoPayDistribution.schema";
import { CoPayDistributionDeleteOneSchema } from "../schemas/deleteOneCoPayDistribution.schema";
import { CoPayDistributionFindFirstSchema } from "../schemas/findFirstCoPayDistribution.schema";
import { CoPayDistributionFindManySchema } from "../schemas/findManyCoPayDistribution.schema";
import { CoPayDistributionFindUniqueSchema } from "../schemas/findUniqueCoPayDistribution.schema";
import { CoPayDistributionGroupBySchema } from "../schemas/groupByCoPayDistribution.schema";
import { CoPayDistributionUpdateManySchema } from "../schemas/updateManyCoPayDistribution.schema";
import { CoPayDistributionUpdateOneSchema } from "../schemas/updateOneCoPayDistribution.schema";
import { CoPayDistributionUpsertSchema } from "../schemas/upsertOneCoPayDistribution.schema";

export const copaydistributionsRouter = t.router({
  aggregateCoPayDistribution: publicProcedure
    .input(CoPayDistributionAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateCoPayDistribution = await ctx.prisma.coPayDistribution.aggregate(input);
      return aggregateCoPayDistribution;
    }),
  createManyCoPayDistribution: publicProcedure
    .input(CoPayDistributionCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyCoPayDistribution = await ctx.prisma.coPayDistribution.createMany(input);
      return createManyCoPayDistribution;
    }),
  createOneCoPayDistribution: publicProcedure
    .input(CoPayDistributionCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneCoPayDistribution = await ctx.prisma.coPayDistribution.create(input);
      return createOneCoPayDistribution;
    }),
  deleteManyCoPayDistribution: publicProcedure
    .input(CoPayDistributionDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyCoPayDistribution = await ctx.prisma.coPayDistribution.deleteMany(input);
      return deleteManyCoPayDistribution;
    }),
  deleteOneCoPayDistribution: publicProcedure
    .input(CoPayDistributionDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneCoPayDistribution = await ctx.prisma.coPayDistribution.delete(input);
      return deleteOneCoPayDistribution;
    }),
  findFirstCoPayDistribution: publicProcedure
    .input(CoPayDistributionFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstCoPayDistribution = await ctx.prisma.coPayDistribution.findFirst(input);
      return findFirstCoPayDistribution;
    }),
  findFirstCoPayDistributionOrThrow: publicProcedure
    .input(CoPayDistributionFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstCoPayDistributionOrThrow = await ctx.prisma.coPayDistribution.findFirstOrThrow(input);
      return findFirstCoPayDistributionOrThrow;
    }),
  findManyCoPayDistribution: publicProcedure
    .input(CoPayDistributionFindManySchema).query(async ({ ctx, input }) => {
      const findManyCoPayDistribution = await ctx.prisma.coPayDistribution.findMany(input);
      return findManyCoPayDistribution;
    }),
  findUniqueCoPayDistribution: publicProcedure
    .input(CoPayDistributionFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueCoPayDistribution = await ctx.prisma.coPayDistribution.findUnique(input);
      return findUniqueCoPayDistribution;
    }),
  findUniqueCoPayDistributionOrThrow: publicProcedure
    .input(CoPayDistributionFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueCoPayDistributionOrThrow = await ctx.prisma.coPayDistribution.findUniqueOrThrow(input);
      return findUniqueCoPayDistributionOrThrow;
    }),
  groupByCoPayDistribution: publicProcedure
    .input(CoPayDistributionGroupBySchema).query(async ({ ctx, input }) => {
      const groupByCoPayDistribution = await ctx.prisma.coPayDistribution.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByCoPayDistribution;
    }),
  updateManyCoPayDistribution: publicProcedure
    .input(CoPayDistributionUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyCoPayDistribution = await ctx.prisma.coPayDistribution.updateMany(input);
      return updateManyCoPayDistribution;
    }),
  updateOneCoPayDistribution: publicProcedure
    .input(CoPayDistributionUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneCoPayDistribution = await ctx.prisma.coPayDistribution.update(input);
      return updateOneCoPayDistribution;
    }),
  upsertOneCoPayDistribution: publicProcedure
    .input(CoPayDistributionUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneCoPayDistribution = await ctx.prisma.coPayDistribution.upsert(input);
      return upsertOneCoPayDistribution;
    }),

}) 
