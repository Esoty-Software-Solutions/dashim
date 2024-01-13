import { t, publicProcedure } from "./helpers/createRouter";
import { SubscriberGroupBalanceAggregateSchema } from "../schemas/aggregateSubscriberGroupBalance.schema";
import { SubscriberGroupBalanceCreateManySchema } from "../schemas/createManySubscriberGroupBalance.schema";
import { SubscriberGroupBalanceCreateOneSchema } from "../schemas/createOneSubscriberGroupBalance.schema";
import { SubscriberGroupBalanceDeleteManySchema } from "../schemas/deleteManySubscriberGroupBalance.schema";
import { SubscriberGroupBalanceDeleteOneSchema } from "../schemas/deleteOneSubscriberGroupBalance.schema";
import { SubscriberGroupBalanceFindFirstSchema } from "../schemas/findFirstSubscriberGroupBalance.schema";
import { SubscriberGroupBalanceFindManySchema } from "../schemas/findManySubscriberGroupBalance.schema";
import { SubscriberGroupBalanceFindUniqueSchema } from "../schemas/findUniqueSubscriberGroupBalance.schema";
import { SubscriberGroupBalanceGroupBySchema } from "../schemas/groupBySubscriberGroupBalance.schema";
import { SubscriberGroupBalanceUpdateManySchema } from "../schemas/updateManySubscriberGroupBalance.schema";
import { SubscriberGroupBalanceUpdateOneSchema } from "../schemas/updateOneSubscriberGroupBalance.schema";
import { SubscriberGroupBalanceUpsertSchema } from "../schemas/upsertOneSubscriberGroupBalance.schema";

export const subscribergroupbalancesRouter = t.router({
  aggregateSubscriberGroupBalance: publicProcedure
    .input(SubscriberGroupBalanceAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateSubscriberGroupBalance = await ctx.prisma.subscriberGroupBalance.aggregate(input);
      return aggregateSubscriberGroupBalance;
    }),
  createManySubscriberGroupBalance: publicProcedure
    .input(SubscriberGroupBalanceCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManySubscriberGroupBalance = await ctx.prisma.subscriberGroupBalance.createMany(input);
      return createManySubscriberGroupBalance;
    }),
  createOneSubscriberGroupBalance: publicProcedure
    .input(SubscriberGroupBalanceCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSubscriberGroupBalance = await ctx.prisma.subscriberGroupBalance.create(input);
      return createOneSubscriberGroupBalance;
    }),
  deleteManySubscriberGroupBalance: publicProcedure
    .input(SubscriberGroupBalanceDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManySubscriberGroupBalance = await ctx.prisma.subscriberGroupBalance.deleteMany(input);
      return deleteManySubscriberGroupBalance;
    }),
  deleteOneSubscriberGroupBalance: publicProcedure
    .input(SubscriberGroupBalanceDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSubscriberGroupBalance = await ctx.prisma.subscriberGroupBalance.delete(input);
      return deleteOneSubscriberGroupBalance;
    }),
  findFirstSubscriberGroupBalance: publicProcedure
    .input(SubscriberGroupBalanceFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSubscriberGroupBalance = await ctx.prisma.subscriberGroupBalance.findFirst(input);
      return findFirstSubscriberGroupBalance;
    }),
  findFirstSubscriberGroupBalanceOrThrow: publicProcedure
    .input(SubscriberGroupBalanceFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSubscriberGroupBalanceOrThrow = await ctx.prisma.subscriberGroupBalance.findFirstOrThrow(input);
      return findFirstSubscriberGroupBalanceOrThrow;
    }),
  findManySubscriberGroupBalance: publicProcedure
    .input(SubscriberGroupBalanceFindManySchema).query(async ({ ctx, input }) => {
      const findManySubscriberGroupBalance = await ctx.prisma.subscriberGroupBalance.findMany(input);
      return findManySubscriberGroupBalance;
    }),
  findUniqueSubscriberGroupBalance: publicProcedure
    .input(SubscriberGroupBalanceFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSubscriberGroupBalance = await ctx.prisma.subscriberGroupBalance.findUnique(input);
      return findUniqueSubscriberGroupBalance;
    }),
  findUniqueSubscriberGroupBalanceOrThrow: publicProcedure
    .input(SubscriberGroupBalanceFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSubscriberGroupBalanceOrThrow = await ctx.prisma.subscriberGroupBalance.findUniqueOrThrow(input);
      return findUniqueSubscriberGroupBalanceOrThrow;
    }),
  groupBySubscriberGroupBalance: publicProcedure
    .input(SubscriberGroupBalanceGroupBySchema).query(async ({ ctx, input }) => {
      const groupBySubscriberGroupBalance = await ctx.prisma.subscriberGroupBalance.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySubscriberGroupBalance;
    }),
  updateManySubscriberGroupBalance: publicProcedure
    .input(SubscriberGroupBalanceUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManySubscriberGroupBalance = await ctx.prisma.subscriberGroupBalance.updateMany(input);
      return updateManySubscriberGroupBalance;
    }),
  updateOneSubscriberGroupBalance: publicProcedure
    .input(SubscriberGroupBalanceUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSubscriberGroupBalance = await ctx.prisma.subscriberGroupBalance.update(input);
      return updateOneSubscriberGroupBalance;
    }),
  upsertOneSubscriberGroupBalance: publicProcedure
    .input(SubscriberGroupBalanceUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSubscriberGroupBalance = await ctx.prisma.subscriberGroupBalance.upsert(input);
      return upsertOneSubscriberGroupBalance;
    }),

}) 
