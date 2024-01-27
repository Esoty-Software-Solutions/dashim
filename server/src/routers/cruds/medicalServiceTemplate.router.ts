import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // MedicalServiceTemplateAggregateSchema,
  MedicalServiceTemplateCreateManySchema,
  MedicalServiceTemplateCreateOneSchema,
  MedicalServiceTemplateDeleteManySchema,
  MedicalServiceTemplateDeleteOneSchema,
  // MedicalServiceTemplateFindFirstSchema,
  MedicalServiceTemplateFindManySchema,
  MedicalServiceTemplateFindUniqueSchema,
  // MedicalServiceTemplateGroupBySchema,
  // MedicalServiceTemplateUpdateManySchema,
  MedicalServiceTemplateUpdateOneSchema,
  // MedicalServiceTemplateUpsertSchema,
  MedicalServiceTemplateCountSchema,
} from "@schemas/routers/medicalServiceTemplate.schema";

export const medicalServiceTemplateRouter = router({
  // aggregate: publicProcedure
  //   .input(MedicalServiceTemplateAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalServiceTemplate.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(MedicalServiceTemplateCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceTemplate.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(MedicalServiceTemplateCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceTemplate.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(MedicalServiceTemplateDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceTemplate.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(MedicalServiceTemplateDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceTemplate.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(MedicalServiceTemplateFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalServiceTemplate.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(MedicalServiceTemplateFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalServiceTemplate.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(MedicalServiceTemplateFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [fData, fCount, uFCount] = await Promise.all([
          ctx.prisma.medicalServiceTemplate.findMany(input),
          ctx.prisma.medicalServiceTemplate.count({ where: input?.where }),
          ctx.prisma.medicalServiceTemplate.count(),
        ]);
        return {
          fData,
          fCount,
          statistics: [{ key: "unFilteredCount", value: uFCount }],
        };
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(MedicalServiceTemplateFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceTemplate.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(MedicalServiceTemplateFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.medicalServiceTemplate.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(MedicalServiceTemplateGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalServiceTemplate.groupBy({
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
  //   .input(MedicalServiceTemplateUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalServiceTemplate.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(MedicalServiceTemplateUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceTemplate.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(MedicalServiceTemplateUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalServiceTemplate.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(MedicalServiceTemplateCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalServiceTemplate.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
