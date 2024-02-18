import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // TenantTypeEnumAggregateSchema,
  TenantTypeEnumCreateManySchema,
  TenantTypeEnumCreateOneSchema,
  TenantTypeEnumDeleteManySchema,
  TenantTypeEnumDeleteOneSchema,
  TenantTypeEnumFindFirstSchema,
  TenantTypeEnumFindManySchema,
  TenantTypeEnumFindUniqueSchema,
  // TenantTypeEnumGroupBySchema,
  // TenantTypeEnumUpdateManySchema,
  TenantTypeEnumUpdateOneSchema,
  // TenantTypeEnumUpsertSchema,
  TenantTypeEnumCountSchema,
} from "@schemas/routers/tenantTypeEnum.schema";

export const tenantTypeEnumRouter = router({
  // aggregate: publicProcedure
  //   .input(TenantTypeEnumAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantTypeEnum.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(TenantTypeEnumCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantTypeEnum.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(TenantTypeEnumCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantTypeEnum.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(TenantTypeEnumDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantTypeEnum.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(TenantTypeEnumDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantTypeEnum.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(TenantTypeEnumFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantTypeEnum.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(TenantTypeEnumFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantTypeEnum.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(TenantTypeEnumFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.tenantTypeEnum.findMany(input),
          ctx.prisma.tenantTypeEnum.count({ where: input?.where }),
          ctx.prisma.tenantTypeEnum.count(),
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
    .input(TenantTypeEnumFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantTypeEnum.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(TenantTypeEnumFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.tenantTypeEnum.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(TenantTypeEnumGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantTypeEnum.groupBy({
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
  //   .input(TenantTypeEnumUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantTypeEnum.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(TenantTypeEnumUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantTypeEnum.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(TenantTypeEnumUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantTypeEnum.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(TenantTypeEnumCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantTypeEnum.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
