import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // DeviceTypeEnumAggregateSchema,
  DeviceTypeEnumCreateManySchema,
  DeviceTypeEnumCreateOneSchema,
  DeviceTypeEnumDeleteManySchema,
  DeviceTypeEnumDeleteOneSchema,
  DeviceTypeEnumFindFirstSchema,
  DeviceTypeEnumFindManySchema,
  DeviceTypeEnumFindUniqueSchema,
  // DeviceTypeEnumGroupBySchema,
  // DeviceTypeEnumUpdateManySchema,
  DeviceTypeEnumUpdateOneSchema,
  // DeviceTypeEnumUpsertSchema,
  DeviceTypeEnumCountSchema,
} from "@schemas/routers/deviceTypeEnum.schema";

export const deviceTypeEnumRouter = router({
  // aggregate: publicProcedure
  //   .input(DeviceTypeEnumAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceTypeEnum.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(DeviceTypeEnumCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceTypeEnum.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(DeviceTypeEnumCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceTypeEnum.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(DeviceTypeEnumDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceTypeEnum.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(DeviceTypeEnumDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceTypeEnum.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(DeviceTypeEnumFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceTypeEnum.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(DeviceTypeEnumFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceTypeEnum.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(DeviceTypeEnumFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.deviceTypeEnum.findMany(input),
          ctx.prisma.deviceTypeEnum.count({ where: input?.where }),
          ctx.prisma.deviceTypeEnum.count(),
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
    .input(DeviceTypeEnumFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceTypeEnum.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(DeviceTypeEnumFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.deviceTypeEnum.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(DeviceTypeEnumGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceTypeEnum.groupBy({
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
  //   .input(DeviceTypeEnumUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceTypeEnum.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(DeviceTypeEnumUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceTypeEnum.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(DeviceTypeEnumUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.deviceTypeEnum.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(DeviceTypeEnumCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.deviceTypeEnum.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
