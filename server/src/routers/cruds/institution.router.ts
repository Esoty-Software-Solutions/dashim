import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // InstitutionAggregateSchema,
  InstitutionCreateManySchema,
  InstitutionCreateOneSchema,
  InstitutionDeleteManySchema,
  InstitutionDeleteOneSchema,
  InstitutionFindFirstSchema,
  InstitutionFindManySchema,
  InstitutionFindUniqueSchema,
  // InstitutionGroupBySchema,
  // InstitutionUpdateManySchema,
  InstitutionUpdateOneSchema,
  // InstitutionUpsertSchema,
  InstitutionCountSchema,
} from "@schemas/routers/institution.schema";

export const institutionRouter = router({
  // aggregate: publicProcedure
  //   .input(InstitutionAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institution.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(InstitutionCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institution.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(InstitutionCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institution.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(InstitutionDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institution.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(InstitutionDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institution.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(InstitutionFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institution.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(InstitutionFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institution.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(InstitutionFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.institution.findMany(input),
          ctx.prisma.institution.count({ where: input?.where }),
          ctx.prisma.institution.count(),
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
    .input(InstitutionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institution.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(InstitutionFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.institution.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(InstitutionGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institution.groupBy({
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
  //   .input(InstitutionUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institution.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(InstitutionUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institution.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(InstitutionUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institution.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(InstitutionCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institution.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
