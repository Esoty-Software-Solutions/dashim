import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // DeviceTokenAggregateSchema,
  DeviceTokenCreateManySchema,
  DeviceTokenCreateOneSchema,
  DeviceTokenDeleteManySchema,
  DeviceTokenDeleteOneSchema,
  DeviceTokenFindFirstSchema,
  DeviceTokenFindManySchema,
  DeviceTokenFindUniqueSchema,
  // DeviceTokenGroupBySchema,
  // DeviceTokenUpdateManySchema,
  DeviceTokenUpdateOneSchema,
  // DeviceTokenUpsertSchema,
  DeviceTokenCountSchema,
} from "@schemas/routers/deviceToken.schema";

export const deviceTokenRouter = router({
  // aggregate: publicProcedure
  //   .input(DeviceTokenAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceToken.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(DeviceTokenCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceToken.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(DeviceTokenCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceToken.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(DeviceTokenDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceToken.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(DeviceTokenDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceToken.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(DeviceTokenFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceToken.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(DeviceTokenFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceToken.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(DeviceTokenFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.deviceToken.findMany(input),
          ctx.prisma.deviceToken.count({ where: input?.where }),
          ctx.prisma.deviceToken.count(),
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
    .input(DeviceTokenFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceToken.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(DeviceTokenFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.deviceToken.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(DeviceTokenGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceToken.groupBy({
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
  //   .input(DeviceTokenUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceToken.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(DeviceTokenUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceToken.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(DeviceTokenUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceToken.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(DeviceTokenCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceToken.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
