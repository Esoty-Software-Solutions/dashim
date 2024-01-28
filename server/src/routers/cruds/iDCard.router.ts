import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // IDCardAggregateSchema,
  IDCardCreateManySchema,
  IDCardCreateOneSchema,
  IDCardDeleteManySchema,
  IDCardDeleteOneSchema,
  IDCardFindFirstSchema,
  IDCardFindManySchema,
  IDCardFindUniqueSchema,
  // IDCardGroupBySchema,
  // IDCardUpdateManySchema,
  IDCardUpdateOneSchema,
  // IDCardUpsertSchema,
  IDCardCountSchema,
} from "@schemas/routers/iDCard.schema";

export const iDCardRouter = router({
  // aggregate: publicProcedure
  //   .input(IDCardAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.iDCard.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(IDCardCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.iDCard.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(IDCardCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.iDCard.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(IDCardDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.iDCard.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(IDCardDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.iDCard.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(IDCardFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.iDCard.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(IDCardFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.iDCard.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(IDCardFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [subscribers, filteredCount, unFilteredCount] = await Promise.all(
          [
            ctx.prisma.iDCard.findMany(input),
            ctx.prisma.iDCard.count({ where: input?.where }),
            ctx.prisma.iDCard.count(),
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
    .input(IDCardFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.iDCard.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(IDCardFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.iDCard.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(IDCardGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.iDCard.groupBy({
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
  //   .input(IDCardUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.iDCard.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(IDCardUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.iDCard.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(IDCardUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.iDCard.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(IDCardCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.iDCard.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
