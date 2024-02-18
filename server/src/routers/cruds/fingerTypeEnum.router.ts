import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // FingerTypeEnumAggregateSchema,
  FingerTypeEnumCreateManySchema,
  FingerTypeEnumCreateOneSchema,
  FingerTypeEnumDeleteManySchema,
  FingerTypeEnumDeleteOneSchema,
  FingerTypeEnumFindFirstSchema,
  FingerTypeEnumFindManySchema,
  FingerTypeEnumFindUniqueSchema,
  // FingerTypeEnumGroupBySchema,
  // FingerTypeEnumUpdateManySchema,
  FingerTypeEnumUpdateOneSchema,
  // FingerTypeEnumUpsertSchema,
  FingerTypeEnumCountSchema,
} from "@schemas/routers/fingerTypeEnum.schema";

export const fingerTypeEnumRouter = router({
  // aggregate: publicProcedure
  //   .input(FingerTypeEnumAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.fingerTypeEnum.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(FingerTypeEnumCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerTypeEnum.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(FingerTypeEnumCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerTypeEnum.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(FingerTypeEnumDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerTypeEnum.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(FingerTypeEnumDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerTypeEnum.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(FingerTypeEnumFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerTypeEnum.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(FingerTypeEnumFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.fingerTypeEnum.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(FingerTypeEnumFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.fingerTypeEnum.findMany(input),
          ctx.prisma.fingerTypeEnum.count({ where: input?.where }),
          ctx.prisma.fingerTypeEnum.count(),
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
    .input(FingerTypeEnumFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerTypeEnum.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(FingerTypeEnumFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.fingerTypeEnum.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(FingerTypeEnumGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.fingerTypeEnum.groupBy({
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
  //   .input(FingerTypeEnumUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.fingerTypeEnum.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(FingerTypeEnumUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerTypeEnum.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(FingerTypeEnumUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.fingerTypeEnum.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(FingerTypeEnumCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerTypeEnum.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
