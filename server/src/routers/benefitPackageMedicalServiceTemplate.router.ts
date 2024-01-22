import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // BenefitPackageMedicalServiceTemplateAggregateSchema,
  BenefitPackageMedicalServiceTemplateCreateManySchema,
  BenefitPackageMedicalServiceTemplateCreateOneSchema,
  BenefitPackageMedicalServiceTemplateDeleteManySchema,
  BenefitPackageMedicalServiceTemplateDeleteOneSchema,
  // BenefitPackageMedicalServiceTemplateFindFirstSchema,
  BenefitPackageMedicalServiceTemplateFindManySchema,
  BenefitPackageMedicalServiceTemplateFindUniqueSchema,
  // BenefitPackageMedicalServiceTemplateGroupBySchema,
  // BenefitPackageMedicalServiceTemplateUpdateManySchema,
  BenefitPackageMedicalServiceTemplateUpdateOneSchema,
  // BenefitPackageMedicalServiceTemplateUpsertSchema,
  BenefitPackageMedicalServiceTemplateCountSchema,
} from "@schemas/routers/benefitPackageMedicalServiceTemplate.schema";

export const benefitPackageMedicalServiceTemplateRouter = router({
  // aggregate: publicProcedure
  //   .input(BenefitPackageMedicalServiceTemplateAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalServiceTemplate.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(BenefitPackageMedicalServiceTemplateCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceTemplate.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(BenefitPackageMedicalServiceTemplateCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceTemplate.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(BenefitPackageMedicalServiceTemplateDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceTemplate.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(BenefitPackageMedicalServiceTemplateDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceTemplate.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(BenefitPackageMedicalServiceTemplateFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalServiceTemplate.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(BenefitPackageMedicalServiceTemplateFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalServiceTemplate.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(BenefitPackageMedicalServiceTemplateFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceTemplate.findMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(BenefitPackageMedicalServiceTemplateFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceTemplate.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(BenefitPackageMedicalServiceTemplateFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.benefitPackageMedicalServiceTemplate.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(BenefitPackageMedicalServiceTemplateGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalServiceTemplate.groupBy({
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
  //   .input(BenefitPackageMedicalServiceTemplateUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalServiceTemplate.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(BenefitPackageMedicalServiceTemplateUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceTemplate.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(BenefitPackageMedicalServiceTemplateUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackageMedicalServiceTemplate.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(BenefitPackageMedicalServiceTemplateCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackageMedicalServiceTemplate.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
