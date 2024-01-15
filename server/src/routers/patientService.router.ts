import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // PatientServiceAggregateSchema,
  PatientServiceCreateManySchema,
  PatientServiceCreateOneSchema,
  PatientServiceDeleteManySchema,
  PatientServiceDeleteOneSchema,
  // PatientServiceFindFirstSchema,
  PatientServiceFindManySchema,
  PatientServiceFindUniqueSchema,
  // PatientServiceGroupBySchema,
  // PatientServiceUpdateManySchema,
  PatientServiceUpdateOneSchema,
  // PatientServiceUpsertSchema,
  PatientServiceCountSchema,
} from "@schemas/routers/patientService.schema";

export const patientServiceRouter = router({
  // aggregate: publicProcedure
  //   .input(PatientServiceAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.patientService.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(PatientServiceCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.patientService.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(PatientServiceCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.patientService.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(PatientServiceDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.patientService.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(PatientServiceDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.patientService.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(PatientServiceFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.patientService.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(PatientServiceFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.patientService.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(PatientServiceFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.patientService.findMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(PatientServiceFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.patientService.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(PatientServiceFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.patientService.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(PatientServiceGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.patientService.groupBy({
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
  //   .input(PatientServiceUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.patientService.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(PatientServiceUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.patientService.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(PatientServiceUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.patientService.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(PatientServiceCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.patientService.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
