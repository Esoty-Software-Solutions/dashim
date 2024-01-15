import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // SubscriberAggregateSchema,
  SubscriberCreateManySchema,
  SubscriberCreateOneSchema,
  SubscriberDeleteManySchema,
  SubscriberDeleteOneSchema,
  // SubscriberFindFirstSchema,
  SubscriberFindManySchema,
  SubscriberFindUniqueSchema,
  // SubscriberGroupBySchema,
  // SubscriberUpdateManySchema,
  SubscriberUpdateOneSchema,
  // SubscriberUpsertSchema,
  SubscriberCountSchema,
} from "@schemas/routers/subscriber.schema";

export const subscriberRouter = router({
  // aggregate: publicProcedure
  //   .input(SubscriberAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.subscriber.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(SubscriberCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriber.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(SubscriberCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriber.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(SubscriberDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriber.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(SubscriberDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriber.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(SubscriberFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.subscriber.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(SubscriberFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.subscriber.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(SubscriberFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriber.findMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(SubscriberFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriber.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(SubscriberFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.subscriber.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(SubscriberGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.subscriber.groupBy({
  //         where: input.where,
  //         orderBy: input.orderBy,
  //         by: input.by,
  //         having: input.having,
  //         take: input.take,
  //         skip: input.skip,
  //       });
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // updateMany: publicProcedure
  //   .input(SubscriberUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.subscriber.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(SubscriberUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriber.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(SubscriberUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.subscriber.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(SubscriberCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriber.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
