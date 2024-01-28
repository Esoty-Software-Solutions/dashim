import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // RoleAggregateSchema,
  RoleCreateManySchema,
  RoleCreateOneSchema,
  RoleDeleteManySchema,
  RoleDeleteOneSchema,
  RoleFindFirstSchema,
  RoleFindManySchema,
  RoleFindUniqueSchema,
  // RoleGroupBySchema,
  // RoleUpdateManySchema,
  RoleUpdateOneSchema,
  // RoleUpsertSchema,
  RoleCountSchema,
} from "@schemas/routers/role.schema";

export const roleRouter = router({
  // aggregate: publicProcedure
  //   .input(RoleAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.role.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(RoleCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.role.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(RoleCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.role.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(RoleDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.role.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(RoleDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.role.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(RoleFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.role.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(RoleFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.role.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(RoleFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [subscribers, filteredCount, unFilteredCount] = await Promise.all(
          [
            ctx.prisma.role.findMany(input),
            ctx.prisma.role.count({ where: input?.where }),
            ctx.prisma.role.count(),
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
    .input(RoleFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.role.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(RoleFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.role.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(RoleGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.role.groupBy({
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
  //   .input(RoleUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.role.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(RoleUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.role.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(RoleUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.role.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(RoleCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.role.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
