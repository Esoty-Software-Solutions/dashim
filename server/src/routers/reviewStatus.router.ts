import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // ReviewStatusAggregateSchema,
  ReviewStatusCreateManySchema,
  ReviewStatusCreateOneSchema,
  ReviewStatusDeleteManySchema,
  ReviewStatusDeleteOneSchema,
  // ReviewStatusFindFirstSchema,
  ReviewStatusFindManySchema,
  ReviewStatusFindUniqueSchema,
  // ReviewStatusGroupBySchema,
  // ReviewStatusUpdateManySchema,
  ReviewStatusUpdateOneSchema,
  // ReviewStatusUpsertSchema,
  ReviewStatusCountSchema,
} from "@schemas/routers/reviewStatus.schema";

export const reviewStatusRouter = router({
  // aggregate: publicProcedure
  //   .input(ReviewStatusAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.reviewStatus.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(ReviewStatusCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.reviewStatus.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(ReviewStatusCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.reviewStatus.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(ReviewStatusDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.reviewStatus.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(ReviewStatusDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.reviewStatus.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(ReviewStatusFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.reviewStatus.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(ReviewStatusFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.reviewStatus.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(ReviewStatusFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.reviewStatus.findMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(ReviewStatusFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.reviewStatus.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(ReviewStatusFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.reviewStatus.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(ReviewStatusGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.reviewStatus.groupBy({
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
  //   .input(ReviewStatusUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.reviewStatus.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(ReviewStatusUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.reviewStatus.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(ReviewStatusUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.reviewStatus.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(ReviewStatusCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.reviewStatus.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
