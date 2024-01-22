import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // InstitutionMedicalCeneterServiceAggregateSchema,
  InstitutionMedicalCeneterServiceCreateManySchema,
  InstitutionMedicalCeneterServiceCreateOneSchema,
  InstitutionMedicalCeneterServiceDeleteManySchema,
  InstitutionMedicalCeneterServiceDeleteOneSchema,
  // InstitutionMedicalCeneterServiceFindFirstSchema,
  InstitutionMedicalCeneterServiceFindManySchema,
  InstitutionMedicalCeneterServiceFindUniqueSchema,
  // InstitutionMedicalCeneterServiceGroupBySchema,
  // InstitutionMedicalCeneterServiceUpdateManySchema,
  InstitutionMedicalCeneterServiceUpdateOneSchema,
  // InstitutionMedicalCeneterServiceUpsertSchema,
  InstitutionMedicalCeneterServiceCountSchema,
} from "@schemas/routers/institutionMedicalCeneterService.schema";

export const institutionMedicalCeneterServiceRouter = router({
  // aggregate: publicProcedure
  //   .input(InstitutionMedicalCeneterServiceAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institutionMedicalCeneterService.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(InstitutionMedicalCeneterServiceCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalCeneterService.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(InstitutionMedicalCeneterServiceCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalCeneterService.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(InstitutionMedicalCeneterServiceDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalCeneterService.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(InstitutionMedicalCeneterServiceDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalCeneterService.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(InstitutionMedicalCeneterServiceFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institutionMedicalCeneterService.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(InstitutionMedicalCeneterServiceFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institutionMedicalCeneterService.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(InstitutionMedicalCeneterServiceFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalCeneterService.findMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(InstitutionMedicalCeneterServiceFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalCeneterService.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(InstitutionMedicalCeneterServiceFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.institutionMedicalCeneterService.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(InstitutionMedicalCeneterServiceGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institutionMedicalCeneterService.groupBy({
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
  //   .input(InstitutionMedicalCeneterServiceUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institutionMedicalCeneterService.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(InstitutionMedicalCeneterServiceUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalCeneterService.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(InstitutionMedicalCeneterServiceUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institutionMedicalCeneterService.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(InstitutionMedicalCeneterServiceCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalCeneterService.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
