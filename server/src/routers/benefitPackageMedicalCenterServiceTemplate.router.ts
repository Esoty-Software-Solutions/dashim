import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // BenefitPackageMedicalCenterServiceTemplateAggregateSchema,
  BenefitPackageMedicalCenterServiceTemplateCreateManySchema,
  BenefitPackageMedicalCenterServiceTemplateCreateOneSchema,
  BenefitPackageMedicalCenterServiceTemplateDeleteManySchema,
  BenefitPackageMedicalCenterServiceTemplateDeleteOneSchema,
  // BenefitPackageMedicalCenterServiceTemplateFindFirstSchema,
  BenefitPackageMedicalCenterServiceTemplateFindManySchema,
  BenefitPackageMedicalCenterServiceTemplateFindUniqueSchema,
  // BenefitPackageMedicalCenterServiceTemplateGroupBySchema,
  // BenefitPackageMedicalCenterServiceTemplateUpdateManySchema,
  BenefitPackageMedicalCenterServiceTemplateUpdateOneSchema,
  // BenefitPackageMedicalCenterServiceTemplateUpsertSchema,
  BenefitPackageMedicalCenterServiceTemplateCountSchema,
} from "@schemas/routers/benefitPackageMedicalCenterServiceTemplate.schema";

export const benefitPackageMedicalCenterServiceTemplateRouter = router({
  // aggregate: publicProcedure
  //   .input(BenefitPackageMedicalCenterServiceTemplateAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(BenefitPackageMedicalCenterServiceTemplateCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(BenefitPackageMedicalCenterServiceTemplateCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(BenefitPackageMedicalCenterServiceTemplateDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(BenefitPackageMedicalCenterServiceTemplateDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(BenefitPackageMedicalCenterServiceTemplateFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(BenefitPackageMedicalCenterServiceTemplateFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(BenefitPackageMedicalCenterServiceTemplateFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.findMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(BenefitPackageMedicalCenterServiceTemplateFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(BenefitPackageMedicalCenterServiceTemplateFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.benefitPackageMedicalCenterServiceTemplate.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(BenefitPackageMedicalCenterServiceTemplateGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.groupBy({
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
  //   .input(BenefitPackageMedicalCenterServiceTemplateUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(BenefitPackageMedicalCenterServiceTemplateUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(BenefitPackageMedicalCenterServiceTemplateUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(BenefitPackageMedicalCenterServiceTemplateCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalCenterServiceTemplate.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
