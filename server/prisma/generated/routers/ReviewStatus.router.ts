import { t, publicProcedure } from "./helpers/createRouter";
import { ReviewStatusAggregateSchema } from "../schemas/aggregateReviewStatus.schema";
import { ReviewStatusCreateManySchema } from "../schemas/createManyReviewStatus.schema";
import { ReviewStatusCreateOneSchema } from "../schemas/createOneReviewStatus.schema";
import { ReviewStatusDeleteManySchema } from "../schemas/deleteManyReviewStatus.schema";
import { ReviewStatusDeleteOneSchema } from "../schemas/deleteOneReviewStatus.schema";
import { ReviewStatusFindFirstSchema } from "../schemas/findFirstReviewStatus.schema";
import { ReviewStatusFindManySchema } from "../schemas/findManyReviewStatus.schema";
import { ReviewStatusFindUniqueSchema } from "../schemas/findUniqueReviewStatus.schema";
import { ReviewStatusGroupBySchema } from "../schemas/groupByReviewStatus.schema";
import { ReviewStatusUpdateManySchema } from "../schemas/updateManyReviewStatus.schema";
import { ReviewStatusUpdateOneSchema } from "../schemas/updateOneReviewStatus.schema";
import { ReviewStatusUpsertSchema } from "../schemas/upsertOneReviewStatus.schema";

export const reviewstatusesRouter = t.router({
  aggregateReviewStatus: publicProcedure
    .input(ReviewStatusAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateReviewStatus = await ctx.prisma.reviewStatus.aggregate(input);
      return aggregateReviewStatus;
    }),
  createManyReviewStatus: publicProcedure
    .input(ReviewStatusCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyReviewStatus = await ctx.prisma.reviewStatus.createMany(input);
      return createManyReviewStatus;
    }),
  createOneReviewStatus: publicProcedure
    .input(ReviewStatusCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneReviewStatus = await ctx.prisma.reviewStatus.create(input);
      return createOneReviewStatus;
    }),
  deleteManyReviewStatus: publicProcedure
    .input(ReviewStatusDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyReviewStatus = await ctx.prisma.reviewStatus.deleteMany(input);
      return deleteManyReviewStatus;
    }),
  deleteOneReviewStatus: publicProcedure
    .input(ReviewStatusDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneReviewStatus = await ctx.prisma.reviewStatus.delete(input);
      return deleteOneReviewStatus;
    }),
  findFirstReviewStatus: publicProcedure
    .input(ReviewStatusFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstReviewStatus = await ctx.prisma.reviewStatus.findFirst(input);
      return findFirstReviewStatus;
    }),
  findFirstReviewStatusOrThrow: publicProcedure
    .input(ReviewStatusFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstReviewStatusOrThrow = await ctx.prisma.reviewStatus.findFirstOrThrow(input);
      return findFirstReviewStatusOrThrow;
    }),
  findManyReviewStatus: publicProcedure
    .input(ReviewStatusFindManySchema).query(async ({ ctx, input }) => {
      const findManyReviewStatus = await ctx.prisma.reviewStatus.findMany(input);
      return findManyReviewStatus;
    }),
  findUniqueReviewStatus: publicProcedure
    .input(ReviewStatusFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueReviewStatus = await ctx.prisma.reviewStatus.findUnique(input);
      return findUniqueReviewStatus;
    }),
  findUniqueReviewStatusOrThrow: publicProcedure
    .input(ReviewStatusFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueReviewStatusOrThrow = await ctx.prisma.reviewStatus.findUniqueOrThrow(input);
      return findUniqueReviewStatusOrThrow;
    }),
  groupByReviewStatus: publicProcedure
    .input(ReviewStatusGroupBySchema).query(async ({ ctx, input }) => {
      const groupByReviewStatus = await ctx.prisma.reviewStatus.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByReviewStatus;
    }),
  updateManyReviewStatus: publicProcedure
    .input(ReviewStatusUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyReviewStatus = await ctx.prisma.reviewStatus.updateMany(input);
      return updateManyReviewStatus;
    }),
  updateOneReviewStatus: publicProcedure
    .input(ReviewStatusUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneReviewStatus = await ctx.prisma.reviewStatus.update(input);
      return updateOneReviewStatus;
    }),
  upsertOneReviewStatus: publicProcedure
    .input(ReviewStatusUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneReviewStatus = await ctx.prisma.reviewStatus.upsert(input);
      return upsertOneReviewStatus;
    }),

}) 
