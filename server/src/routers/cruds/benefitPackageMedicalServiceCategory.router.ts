import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // BenefitPackageMedicalServiceCategoryAggregateSchema,
  BenefitPackageMedicalServiceCategoryCreateManySchema,
  BenefitPackageMedicalServiceCategoryCreateOneSchema,
  BenefitPackageMedicalServiceCategoryDeleteManySchema,
  BenefitPackageMedicalServiceCategoryDeleteOneSchema,
  BenefitPackageMedicalServiceCategoryFindFirstSchema,
  BenefitPackageMedicalServiceCategoryFindManySchema,
  BenefitPackageMedicalServiceCategoryFindUniqueSchema,
  // BenefitPackageMedicalServiceCategoryGroupBySchema,
  // BenefitPackageMedicalServiceCategoryUpdateManySchema,
  BenefitPackageMedicalServiceCategoryUpdateOneSchema,
  // BenefitPackageMedicalServiceCategoryUpsertSchema,
  BenefitPackageMedicalServiceCategoryCountSchema,
} from "@schemas/routers/benefitPackageMedicalServiceCategory.schema";

export const benefitPackageMedicalServiceCategoryRouter = router({
  // aggregate: publicProcedure
  //   .input(BenefitPackageMedicalServiceCategoryAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalServiceCategory.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(BenefitPackageMedicalServiceCategoryCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceCategory.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(BenefitPackageMedicalServiceCategoryCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceCategory.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(BenefitPackageMedicalServiceCategoryDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceCategory.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(BenefitPackageMedicalServiceCategoryDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceCategory.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(BenefitPackageMedicalServiceCategoryFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceCategory.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(BenefitPackageMedicalServiceCategoryFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalServiceCategory.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(BenefitPackageMedicalServiceCategoryFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.benefitPackageMedicalServiceCategory.findMany(input),
          ctx.prisma.benefitPackageMedicalServiceCategory.count({ where: input?.where }),
          ctx.prisma.benefitPackageMedicalServiceCategory.count(),
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
    .input(BenefitPackageMedicalServiceCategoryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceCategory.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(BenefitPackageMedicalServiceCategoryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.benefitPackageMedicalServiceCategory.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(BenefitPackageMedicalServiceCategoryGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalServiceCategory.groupBy({
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
  //   .input(BenefitPackageMedicalServiceCategoryUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalServiceCategory.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(BenefitPackageMedicalServiceCategoryUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceCategory.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(BenefitPackageMedicalServiceCategoryUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalServiceCategory.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(BenefitPackageMedicalServiceCategoryCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceCategory.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
