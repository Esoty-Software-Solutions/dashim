import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // CountryEnumAggregateSchema,
  CountryEnumCreateManySchema,
  CountryEnumCreateOneSchema,
  CountryEnumDeleteManySchema,
  CountryEnumDeleteOneSchema,
  CountryEnumFindFirstSchema,
  CountryEnumFindManySchema,
  CountryEnumFindUniqueSchema,
  // CountryEnumGroupBySchema,
  // CountryEnumUpdateManySchema,
  CountryEnumUpdateOneSchema,
  // CountryEnumUpsertSchema,
  CountryEnumCountSchema,
} from "@schemas/routers/countryEnum.schema";

export const countryEnumRouter = router({
  // aggregate: publicProcedure
  //   .input(CountryEnumAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.countryEnum.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(CountryEnumCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.countryEnum.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(CountryEnumCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.countryEnum.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(CountryEnumDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.countryEnum.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(CountryEnumDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.countryEnum.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(CountryEnumFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.countryEnum.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(CountryEnumFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.countryEnum.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(CountryEnumFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.countryEnum.findMany(input),
          ctx.prisma.countryEnum.count({ where: input?.where }),
          ctx.prisma.countryEnum.count(),
        ]);
        const statistics: {
          key: string;
          value: string | number | boolean;
        }[] = [];
        return {
          data,
          filteredCount,
          unFilteredCount,
          statistics,
        };
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(CountryEnumFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.countryEnum.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(CountryEnumFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.countryEnum.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(CountryEnumGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.countryEnum.groupBy({
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
  //   .input(CountryEnumUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.countryEnum.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(CountryEnumUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.countryEnum.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(CountryEnumUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.countryEnum.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(CountryEnumCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.countryEnum.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
