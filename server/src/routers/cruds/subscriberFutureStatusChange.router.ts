import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // SubscriberFutureStatusChangeAggregateSchema,
  SubscriberFutureStatusChangeCreateManySchema,
  SubscriberFutureStatusChangeCreateOneSchema,
  SubscriberFutureStatusChangeDeleteManySchema,
  SubscriberFutureStatusChangeDeleteOneSchema,
  SubscriberFutureStatusChangeFindFirstSchema,
  SubscriberFutureStatusChangeFindManySchema,
  SubscriberFutureStatusChangeFindUniqueSchema,
  // SubscriberFutureStatusChangeGroupBySchema,
  // SubscriberFutureStatusChangeUpdateManySchema,
  SubscriberFutureStatusChangeUpdateOneSchema,
  // SubscriberFutureStatusChangeUpsertSchema,
  SubscriberFutureStatusChangeCountSchema,
} from "@schemas/routers/subscriberFutureStatusChange.schema";

export const subscriberFutureStatusChangeRouter = router({
  // aggregate: publicProcedure
  //   .input(SubscriberFutureStatusChangeAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.subscriberFutureStatusChange.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(SubscriberFutureStatusChangeCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriberFutureStatusChange.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(SubscriberFutureStatusChangeCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriberFutureStatusChange.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(SubscriberFutureStatusChangeDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriberFutureStatusChange.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(SubscriberFutureStatusChangeDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriberFutureStatusChange.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(SubscriberFutureStatusChangeFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriberFutureStatusChange.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(SubscriberFutureStatusChangeFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.subscriberFutureStatusChange.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(SubscriberFutureStatusChangeFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.subscriberFutureStatusChange.findMany(input),
          ctx.prisma.subscriberFutureStatusChange.count({ where: input?.where }),
          ctx.prisma.subscriberFutureStatusChange.count(),
        ]);
        return {
          data,
          fCount,
          uFCount,
        };
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(SubscriberFutureStatusChangeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriberFutureStatusChange.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(SubscriberFutureStatusChangeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.subscriberFutureStatusChange.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(SubscriberFutureStatusChangeGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.subscriberFutureStatusChange.groupBy({
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
  //   .input(SubscriberFutureStatusChangeUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.subscriberFutureStatusChange.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(SubscriberFutureStatusChangeUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriberFutureStatusChange.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(SubscriberFutureStatusChangeUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.subscriberFutureStatusChange.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(SubscriberFutureStatusChangeCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.subscriberFutureStatusChange.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
