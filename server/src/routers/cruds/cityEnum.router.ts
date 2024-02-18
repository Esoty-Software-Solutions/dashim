import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // CityEnumAggregateSchema,
  CityEnumCreateManySchema,
  CityEnumCreateOneSchema,
  CityEnumDeleteManySchema,
  CityEnumDeleteOneSchema,
  CityEnumFindFirstSchema,
  CityEnumFindManySchema,
  CityEnumFindUniqueSchema,
  // CityEnumGroupBySchema,
  // CityEnumUpdateManySchema,
  CityEnumUpdateOneSchema,
  // CityEnumUpsertSchema,
  CityEnumCountSchema,
} from "@schemas/routers/cityEnum.schema";

export const cityEnumRouter = router({
  // aggregate: publicProcedure
  //   .input(CityEnumAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.cityEnum.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(CityEnumCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.cityEnum.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(CityEnumCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.cityEnum.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(CityEnumDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.cityEnum.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(CityEnumDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.cityEnum.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(CityEnumFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.cityEnum.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(CityEnumFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.cityEnum.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(CityEnumFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.cityEnum.findMany(input),
          ctx.prisma.cityEnum.count({ where: input?.where }),
          ctx.prisma.cityEnum.count(),
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
    .input(CityEnumFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.cityEnum.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(CityEnumFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.cityEnum.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(CityEnumGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.cityEnum.groupBy({
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
  //   .input(CityEnumUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.cityEnum.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(CityEnumUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.cityEnum.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(CityEnumUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.cityEnum.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(CityEnumCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.cityEnum.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
