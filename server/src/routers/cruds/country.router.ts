import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // CountryAggregateSchema,
  CountryCreateManySchema,
  CountryCreateOneSchema,
  CountryDeleteManySchema,
  CountryDeleteOneSchema,
  CountryFindFirstSchema,
  CountryFindManySchema,
  CountryFindUniqueSchema,
  // CountryGroupBySchema,
  // CountryUpdateManySchema,
  CountryUpdateOneSchema,
  // CountryUpsertSchema,
  CountryCountSchema,
} from "@schemas/routers/country.schema";

export const countryRouter = router({
  // aggregate: publicProcedure
  //   .input(CountryAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.country.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(CountryCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.country.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(CountryCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.country.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(CountryDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.country.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(CountryDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.country.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(CountryFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.country.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(CountryFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.country.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(CountryFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [subscribers, filteredCount, unFilteredCount] = await Promise.all(
          [
            ctx.prisma.country.findMany(input),
            ctx.prisma.country.count({ where: input?.where }),
            ctx.prisma.country.count(),
          ],
        );
        const statistics: {
          key: string;
          value: string | number | boolean;
        }[] = [];
        return {
          data: subscribers,
          filteredCount,
          unFilteredCount,
          statistics,
        };
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(CountryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.country.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(CountryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.country.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(CountryGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.country.groupBy({
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
  //   .input(CountryUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.country.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(CountryUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.country.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(CountryUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.country.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(CountryCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.country.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
