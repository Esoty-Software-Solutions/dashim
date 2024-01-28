import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // TenantAggregateSchema,
  TenantCreateManySchema,
  TenantCreateOneSchema,
  TenantDeleteManySchema,
  TenantDeleteOneSchema,
  TenantFindFirstSchema,
  TenantFindManySchema,
  TenantFindUniqueSchema,
  // TenantGroupBySchema,
  // TenantUpdateManySchema,
  TenantUpdateOneSchema,
  // TenantUpsertSchema,
  TenantCountSchema,
} from "@schemas/routers/tenant.schema";

export const tenantRouter = router({
  // aggregate: publicProcedure
  //   .input(TenantAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenant.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(TenantCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenant.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(TenantCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenant.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(TenantDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenant.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(TenantDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenant.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(TenantFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenant.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(TenantFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenant.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(TenantFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [subscribers, filteredCount, unFilteredCount] = await Promise.all(
          [
            ctx.prisma.tenant.findMany(input),
            ctx.prisma.tenant.count({ where: input?.where }),
            ctx.prisma.tenant.count(),
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
    .input(TenantFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenant.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(TenantFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.tenant.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(TenantGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenant.groupBy({
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
  //   .input(TenantUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenant.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(TenantUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenant.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(TenantUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenant.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(TenantCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenant.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
