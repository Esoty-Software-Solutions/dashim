import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // CityAggregateSchema,
  CityCreateManySchema,
  CityCreateOneSchema,
  CityDeleteManySchema,
  CityDeleteOneSchema,
  // CityFindFirstSchema,
  CityFindManySchema,
  CityFindUniqueSchema,
  // CityGroupBySchema,
  // CityUpdateManySchema,
  CityUpdateOneSchema,
  // CityUpsertSchema,
  CityCountSchema,
} from "@schemas/routers/city.schema";

export const cityRouter = router({
  // aggregate: publicProcedure
  //   .input(CityAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.city.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(CityCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.city.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(CityCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.city.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(CityDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.city.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(CityDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.city.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(CityFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.city.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(CityFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.city.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(CityFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [fData, fCount, uFCount] = await Promise.all([
          ctx.prisma.city.findMany(input),
          ctx.prisma.city.count({ where: input?.where }),
          ctx.prisma.city.count(),
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
    .input(CityFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.city.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(CityFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.city.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(CityGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.city.groupBy({
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
  //   .input(CityUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.city.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(CityUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.city.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(CityUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.city.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(CityCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.city.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
