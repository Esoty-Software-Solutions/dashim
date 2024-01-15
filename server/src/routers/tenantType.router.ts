import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // TenantTypeAggregateSchema,
  TenantTypeCreateManySchema,
  TenantTypeCreateOneSchema,
  TenantTypeDeleteManySchema,
  TenantTypeDeleteOneSchema,
  // TenantTypeFindFirstSchema,
  TenantTypeFindManySchema,
  TenantTypeFindUniqueSchema,
  // TenantTypeGroupBySchema,
  // TenantTypeUpdateManySchema,
  TenantTypeUpdateOneSchema,
  // TenantTypeUpsertSchema,
  TenantTypeCountSchema,
} from "@schemas/routers/tenantType.schema";

export const tenantTypeRouter = router({
  // aggregate: publicProcedure
  //   .input(TenantTypeAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantType.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(TenantTypeCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantType.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(TenantTypeCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantType.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(TenantTypeDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantType.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(TenantTypeDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantType.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(TenantTypeFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantType.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(TenantTypeFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantType.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(TenantTypeFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantType.findMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(TenantTypeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantType.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(TenantTypeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.tenantType.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(TenantTypeGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantType.groupBy({
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
  //   .input(TenantTypeUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantType.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(TenantTypeUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantType.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(TenantTypeUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantType.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(TenantTypeCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantType.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
