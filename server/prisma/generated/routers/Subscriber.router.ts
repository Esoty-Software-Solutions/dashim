import { t, publicProcedure } from "./helpers/createRouter";
import { SubscriberAggregateSchema } from "../schemas/aggregateSubscriber.schema";
import { SubscriberCreateManySchema } from "../schemas/createManySubscriber.schema";
import { SubscriberCreateOneSchema } from "../schemas/createOneSubscriber.schema";
import { SubscriberDeleteManySchema } from "../schemas/deleteManySubscriber.schema";
import { SubscriberDeleteOneSchema } from "../schemas/deleteOneSubscriber.schema";
import { SubscriberFindFirstSchema } from "../schemas/findFirstSubscriber.schema";
import { SubscriberFindManySchema } from "../schemas/findManySubscriber.schema";
import { SubscriberFindUniqueSchema } from "../schemas/findUniqueSubscriber.schema";
import { SubscriberGroupBySchema } from "../schemas/groupBySubscriber.schema";
import { SubscriberUpdateManySchema } from "../schemas/updateManySubscriber.schema";
import { SubscriberUpdateOneSchema } from "../schemas/updateOneSubscriber.schema";
import { SubscriberUpsertSchema } from "../schemas/upsertOneSubscriber.schema";

export const subscribersRouter = t.router({
  aggregateSubscriber: publicProcedure
    .input(SubscriberAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateSubscriber = await ctx.prisma.subscriber.aggregate(input);
      return aggregateSubscriber;
    }),
  createManySubscriber: publicProcedure
    .input(SubscriberCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManySubscriber = await ctx.prisma.subscriber.createMany(input);
      return createManySubscriber;
    }),
  createOneSubscriber: publicProcedure
    .input(SubscriberCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneSubscriber = await ctx.prisma.subscriber.create(input);
      return createOneSubscriber;
    }),
  deleteManySubscriber: publicProcedure
    .input(SubscriberDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManySubscriber = await ctx.prisma.subscriber.deleteMany(input);
      return deleteManySubscriber;
    }),
  deleteOneSubscriber: publicProcedure
    .input(SubscriberDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneSubscriber = await ctx.prisma.subscriber.delete(input);
      return deleteOneSubscriber;
    }),
  findFirstSubscriber: publicProcedure
    .input(SubscriberFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSubscriber = await ctx.prisma.subscriber.findFirst(input);
      return findFirstSubscriber;
    }),
  findFirstSubscriberOrThrow: publicProcedure
    .input(SubscriberFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstSubscriberOrThrow = await ctx.prisma.subscriber.findFirstOrThrow(input);
      return findFirstSubscriberOrThrow;
    }),
  findManySubscriber: publicProcedure
    .input(SubscriberFindManySchema).query(async ({ ctx, input }) => {
      const findManySubscriber = await ctx.prisma.subscriber.findMany(input);
      return findManySubscriber;
    }),
  findUniqueSubscriber: publicProcedure
    .input(SubscriberFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSubscriber = await ctx.prisma.subscriber.findUnique(input);
      return findUniqueSubscriber;
    }),
  findUniqueSubscriberOrThrow: publicProcedure
    .input(SubscriberFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueSubscriberOrThrow = await ctx.prisma.subscriber.findUniqueOrThrow(input);
      return findUniqueSubscriberOrThrow;
    }),
  groupBySubscriber: publicProcedure
    .input(SubscriberGroupBySchema).query(async ({ ctx, input }) => {
      const groupBySubscriber = await ctx.prisma.subscriber.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupBySubscriber;
    }),
  updateManySubscriber: publicProcedure
    .input(SubscriberUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManySubscriber = await ctx.prisma.subscriber.updateMany(input);
      return updateManySubscriber;
    }),
  updateOneSubscriber: publicProcedure
    .input(SubscriberUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneSubscriber = await ctx.prisma.subscriber.update(input);
      return updateOneSubscriber;
    }),
  upsertOneSubscriber: publicProcedure
    .input(SubscriberUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneSubscriber = await ctx.prisma.subscriber.upsert(input);
      return upsertOneSubscriber;
    }),

}) 
