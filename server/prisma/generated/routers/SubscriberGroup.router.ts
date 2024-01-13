import { t, publicProcedure } from "./helpers/createRouter";
import { SubscriberGroupAggregateSchema } from "../schemas/aggregateSubscriberGroup.schema";
import { SubscriberGroupCreateManySchema } from "../schemas/createManySubscriberGroup.schema";
import { SubscriberGroupCreateOneSchema } from "../schemas/createOneSubscriberGroup.schema";
import { SubscriberGroupDeleteManySchema } from "../schemas/deleteManySubscriberGroup.schema";
import { SubscriberGroupDeleteOneSchema } from "../schemas/deleteOneSubscriberGroup.schema";
import { SubscriberGroupFindFirstSchema } from "../schemas/findFirstSubscriberGroup.schema";
import { SubscriberGroupFindManySchema } from "../schemas/findManySubscriberGroup.schema";
import { SubscriberGroupFindUniqueSchema } from "../schemas/findUniqueSubscriberGroup.schema";
import { SubscriberGroupGroupBySchema } from "../schemas/groupBySubscriberGroup.schema";
import { SubscriberGroupUpdateManySchema } from "../schemas/updateManySubscriberGroup.schema";
import { SubscriberGroupUpdateOneSchema } from "../schemas/updateOneSubscriberGroup.schema";
import { SubscriberGroupUpsertSchema } from "../schemas/upsertOneSubscriberGroup.schema";

export const subscribergroupsRouter = t.router({
  aggregateSubscriberGroup: publicProcedure
    .input(SubscriberGroupAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateSubscriberGroup = await ctx.prisma.subscriberGroup.aggregate(input);
      return aggregateSubscriberGroup;
    }),
  createManySubscriberGroup: publicProcedure
    .input(SubscriberGroupCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManySubscriberGroup = await ctx.prisma.subscriberGroup.createMany(input);
      return createManySubscriberGroup;
    }),
  createOneSubscriberGroup: publicProcedure
    .input(SubscriberGroupCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSubscriberGroup = await ctx.prisma.subscriberGroup.create(input);
      return createOneSubscriberGroup;
    }),
  deleteManySubscriberGroup: publicProcedure
    .input(SubscriberGroupDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManySubscriberGroup = await ctx.prisma.subscriberGroup.deleteMany(input);
      return deleteManySubscriberGroup;
    }),
  deleteOneSubscriberGroup: publicProcedure
    .input(SubscriberGroupDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSubscriberGroup = await ctx.prisma.subscriberGroup.delete(input);
      return deleteOneSubscriberGroup;
    }),
  findFirstSubscriberGroup: publicProcedure
    .input(SubscriberGroupFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSubscriberGroup = await ctx.prisma.subscriberGroup.findFirst(input);
      return findFirstSubscriberGroup;
    }),
  findFirstSubscriberGroupOrThrow: publicProcedure
    .input(SubscriberGroupFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSubscriberGroupOrThrow = await ctx.prisma.subscriberGroup.findFirstOrThrow(input);
      return findFirstSubscriberGroupOrThrow;
    }),
  findManySubscriberGroup: publicProcedure
    .input(SubscriberGroupFindManySchema).query(async ({ ctx, input }) => {
      const findManySubscriberGroup = await ctx.prisma.subscriberGroup.findMany(input);
      return findManySubscriberGroup;
    }),
  findUniqueSubscriberGroup: publicProcedure
    .input(SubscriberGroupFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSubscriberGroup = await ctx.prisma.subscriberGroup.findUnique(input);
      return findUniqueSubscriberGroup;
    }),
  findUniqueSubscriberGroupOrThrow: publicProcedure
    .input(SubscriberGroupFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSubscriberGroupOrThrow = await ctx.prisma.subscriberGroup.findUniqueOrThrow(input);
      return findUniqueSubscriberGroupOrThrow;
    }),
  groupBySubscriberGroup: publicProcedure
    .input(SubscriberGroupGroupBySchema).query(async ({ ctx, input }) => {
      const groupBySubscriberGroup = await ctx.prisma.subscriberGroup.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySubscriberGroup;
    }),
  updateManySubscriberGroup: publicProcedure
    .input(SubscriberGroupUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManySubscriberGroup = await ctx.prisma.subscriberGroup.updateMany(input);
      return updateManySubscriberGroup;
    }),
  updateOneSubscriberGroup: publicProcedure
    .input(SubscriberGroupUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSubscriberGroup = await ctx.prisma.subscriberGroup.update(input);
      return updateOneSubscriberGroup;
    }),
  upsertOneSubscriberGroup: publicProcedure
    .input(SubscriberGroupUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSubscriberGroup = await ctx.prisma.subscriberGroup.upsert(input);
      return upsertOneSubscriberGroup;
    }),

}) 
