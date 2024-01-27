import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // DeviceTypeAggregateSchema,
  DeviceTypeCreateManySchema,
  DeviceTypeCreateOneSchema,
  DeviceTypeDeleteManySchema,
  DeviceTypeDeleteOneSchema,
  DeviceTypeFindFirstSchema,
  DeviceTypeFindManySchema,
  DeviceTypeFindUniqueSchema,
  // DeviceTypeGroupBySchema,
  // DeviceTypeUpdateManySchema,
  DeviceTypeUpdateOneSchema,
  // DeviceTypeUpsertSchema,
  DeviceTypeCountSchema,
} from "@schemas/routers/deviceType.schema";

export const deviceTypeRouter = router({
  // aggregate: publicProcedure
  //   .input(DeviceTypeAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceType.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(DeviceTypeCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceType.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(DeviceTypeCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceType.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(DeviceTypeDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceType.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(DeviceTypeDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceType.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(DeviceTypeFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceType.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(DeviceTypeFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceType.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(DeviceTypeFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.deviceType.findMany(input),
          ctx.prisma.deviceType.count({ where: input?.where }),
          ctx.prisma.deviceType.count(),
        ]);
        return {
          data,
          fCount,
          uFCount,
        };
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(DeviceTypeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceType.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(DeviceTypeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.deviceType.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(DeviceTypeGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceType.groupBy({
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
  //   .input(DeviceTypeUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceType.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(DeviceTypeUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceType.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(DeviceTypeUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceType.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(DeviceTypeCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceType.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
