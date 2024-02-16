import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // MedicalServiceCategoryAggregateSchema,
  MedicalServiceCategoryCreateManySchema,
  MedicalServiceCategoryCreateOneSchema,
  MedicalServiceCategoryDeleteManySchema,
  MedicalServiceCategoryDeleteOneSchema,
  MedicalServiceCategoryFindFirstSchema,
  MedicalServiceCategoryFindManySchema,
  MedicalServiceCategoryFindUniqueSchema,
  // MedicalServiceCategoryGroupBySchema,
  // MedicalServiceCategoryUpdateManySchema,
  MedicalServiceCategoryUpdateOneSchema,
  // MedicalServiceCategoryUpsertSchema,
  MedicalServiceCategoryCountSchema,
} from "@schemas/routers/medicalServiceCategory.schema";

export const medicalServiceCategoryRouter = router({
  // aggregate: publicProcedure
  //   .input(MedicalServiceCategoryAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalServiceCategory.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(MedicalServiceCategoryCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceCategory.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(MedicalServiceCategoryCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceCategory.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(MedicalServiceCategoryDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceCategory.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(MedicalServiceCategoryDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceCategory.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(MedicalServiceCategoryFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceCategory.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(MedicalServiceCategoryFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalServiceCategory.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(MedicalServiceCategoryFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.medicalServiceCategory.findMany(input),
          ctx.prisma.medicalServiceCategory.count({ where: input?.where }),
          ctx.prisma.medicalServiceCategory.count(),
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
    .input(MedicalServiceCategoryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceCategory.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(MedicalServiceCategoryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.medicalServiceCategory.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(MedicalServiceCategoryGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalServiceCategory.groupBy({
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
  //   .input(MedicalServiceCategoryUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalServiceCategory.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(MedicalServiceCategoryUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceCategory.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(MedicalServiceCategoryUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalServiceCategory.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(MedicalServiceCategoryCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceCategory.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
