import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // TenantMemberAggregateSchema,
  TenantMemberCreateManySchema,
  TenantMemberCreateOneSchema,
  TenantMemberDeleteManySchema,
  TenantMemberDeleteOneSchema,
  TenantMemberFindFirstSchema,
  TenantMemberFindManySchema,
  TenantMemberFindUniqueSchema,
  // TenantMemberGroupBySchema,
  // TenantMemberUpdateManySchema,
  TenantMemberUpdateOneSchema,
  // TenantMemberUpsertSchema,
  TenantMemberCountSchema,
} from "@schemas/routers/tenantMember.schema";

export const tenantMemberRouter = router({
  // aggregate: publicProcedure
  //   .input(TenantMemberAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantMember.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(TenantMemberCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMember.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(TenantMemberCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMember.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(TenantMemberDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMember.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(TenantMemberDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMember.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(TenantMemberFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMember.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(TenantMemberFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantMember.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(TenantMemberFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.tenantMember.findMany(input),
          ctx.prisma.tenantMember.count({ where: input?.where }),
          ctx.prisma.tenantMember.count(),
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
    .input(TenantMemberFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMember.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(TenantMemberFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.tenantMember.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(TenantMemberGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantMember.groupBy({
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
  //   .input(TenantMemberUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantMember.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(TenantMemberUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMember.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(TenantMemberUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantMember.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(TenantMemberCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMember.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
