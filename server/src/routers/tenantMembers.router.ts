import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // TenantMembersAggregateSchema,
  TenantMembersCreateManySchema,
  TenantMembersCreateOneSchema,
  TenantMembersDeleteManySchema,
  TenantMembersDeleteOneSchema,
  // TenantMembersFindFirstSchema,
  TenantMembersFindManySchema,
  TenantMembersFindUniqueSchema,
  // TenantMembersGroupBySchema,
  // TenantMembersUpdateManySchema,
  TenantMembersUpdateOneSchema,
  // TenantMembersUpsertSchema,
  TenantMembersCountSchema,
} from "@schemas/routers/tenantMembers.schema";

export const tenantMembersRouter = router({
  // aggregate: publicProcedure
  //   .input(TenantMembersAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantMembers.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(TenantMembersCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMembers.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(TenantMembersCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMembers.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(TenantMembersDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMembers.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(TenantMembersDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMembers.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(TenantMembersFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantMembers.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(TenantMembersFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantMembers.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(TenantMembersFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMembers.findMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(TenantMembersFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMembers.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(TenantMembersFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.tenantMembers.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(TenantMembersGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantMembers.groupBy({
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
  //   .input(TenantMembersUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantMembers.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(TenantMembersUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMembers.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(TenantMembersUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.tenantMembers.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(TenantMembersCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.tenantMembers.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
