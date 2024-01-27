import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // CurrencyAggregateSchema,
  CurrencyCreateManySchema,
  CurrencyCreateOneSchema,
  CurrencyDeleteManySchema,
  CurrencyDeleteOneSchema,
  // CurrencyFindFirstSchema,
  CurrencyFindManySchema,
  CurrencyFindUniqueSchema,
  // CurrencyGroupBySchema,
  // CurrencyUpdateManySchema,
  CurrencyUpdateOneSchema,
  // CurrencyUpsertSchema,
  CurrencyCountSchema,
} from "@schemas/routers/currency.schema";

export const currencyRouter = router({
  // aggregate: publicProcedure
  //   .input(CurrencyAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.currency.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(CurrencyCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.currency.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(CurrencyCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.currency.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(CurrencyDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.currency.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(CurrencyDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.currency.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(CurrencyFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.currency.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(CurrencyFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.currency.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(CurrencyFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [fData, fCount, uFCount] = await Promise.all([
          ctx.prisma.currency.findMany(input),
          ctx.prisma.currency.count({ where: input?.where }),
          ctx.prisma.currency.count(),
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
    .input(CurrencyFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.currency.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(CurrencyFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.currency.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(CurrencyGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.currency.groupBy({
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
  //   .input(CurrencyUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.currency.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(CurrencyUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.currency.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(CurrencyUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.currency.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(CurrencyCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.currency.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
