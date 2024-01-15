import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // MedicalCenterServiceTemplateAggregateSchema,
  MedicalCenterServiceTemplateCreateManySchema,
  MedicalCenterServiceTemplateCreateOneSchema,
  MedicalCenterServiceTemplateDeleteManySchema,
  MedicalCenterServiceTemplateDeleteOneSchema,
  // MedicalCenterServiceTemplateFindFirstSchema,
  MedicalCenterServiceTemplateFindManySchema,
  MedicalCenterServiceTemplateFindUniqueSchema,
  // MedicalCenterServiceTemplateGroupBySchema,
  // MedicalCenterServiceTemplateUpdateManySchema,
  MedicalCenterServiceTemplateUpdateOneSchema,
  // MedicalCenterServiceTemplateUpsertSchema,
  MedicalCenterServiceTemplateCountSchema,
} from "@schemas/routers/medicalCenterServiceTemplate.schema";

export const medicalCenterServiceTemplateRouter = router({
  // aggregate: publicProcedure
  //   .input(MedicalCenterServiceTemplateAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalCenterServiceTemplate.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(MedicalCenterServiceTemplateCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenterServiceTemplate.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(MedicalCenterServiceTemplateCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenterServiceTemplate.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(MedicalCenterServiceTemplateDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenterServiceTemplate.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(MedicalCenterServiceTemplateDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenterServiceTemplate.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(MedicalCenterServiceTemplateFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalCenterServiceTemplate.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(MedicalCenterServiceTemplateFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalCenterServiceTemplate.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(MedicalCenterServiceTemplateFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenterServiceTemplate.findMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(MedicalCenterServiceTemplateFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenterServiceTemplate.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(MedicalCenterServiceTemplateFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.medicalCenterServiceTemplate.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(MedicalCenterServiceTemplateGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalCenterServiceTemplate.groupBy({
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
  //   .input(MedicalCenterServiceTemplateUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalCenterServiceTemplate.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(MedicalCenterServiceTemplateUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenterServiceTemplate.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(MedicalCenterServiceTemplateUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalCenterServiceTemplate.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(MedicalCenterServiceTemplateCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenterServiceTemplate.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
