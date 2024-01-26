import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // GenderAggregateSchema,
  GenderCreateManySchema,
  GenderCreateOneSchema,
  GenderDeleteManySchema,
  GenderDeleteOneSchema,
  // GenderFindFirstSchema,
  GenderFindManySchema,
  GenderFindUniqueSchema,
  // GenderGroupBySchema,
  // GenderUpdateManySchema,
  GenderUpdateOneSchema,
  // GenderUpsertSchema,
  GenderCountSchema,
} from "@schemas/routers/gender.schema";

export const genderRouter = router({
  // aggregate: publicProcedure
  //   .input(GenderAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.gender.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(GenderCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.gender.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(GenderCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.gender.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(GenderDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.gender.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(GenderDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.gender.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(GenderFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.gender.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(GenderFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.gender.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(GenderFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [fData, fCount, uFCount] = await Promise.all([
          ctx.prisma.gender.findMany(input),
          ctx.prisma.gender.count({ where: input?.where }),
          ctx.prisma.gender.count(),
        ]);
        return {
          fData,
          fCount,
          statistics: [{ key: "unFilteredCount", value: uFCount }],
        };
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(GenderFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.gender.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(GenderFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.gender.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(GenderGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.gender.groupBy({
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
  //   .input(GenderUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.gender.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(GenderUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.gender.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(GenderUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.gender.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(GenderCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.gender.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
