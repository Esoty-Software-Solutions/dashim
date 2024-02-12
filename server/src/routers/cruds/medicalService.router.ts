import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // MedicalServiceAggregateSchema,
  MedicalServiceCreateManySchema,
  MedicalServiceCreateOneSchema,
  MedicalServiceDeleteManySchema,
  MedicalServiceDeleteOneSchema,
  MedicalServiceFindFirstSchema,
  MedicalServiceFindManySchema,
  MedicalServiceFindUniqueSchema,
  // MedicalServiceGroupBySchema,
  // MedicalServiceUpdateManySchema,
  MedicalServiceUpdateOneSchema,
  // MedicalServiceUpsertSchema,
  MedicalServiceCountSchema,
} from "@schemas/routers/medicalService.schema";

export const medicalServiceRouter = router({
  // aggregate: publicProcedure
  //   .input(MedicalServiceAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalService.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(MedicalServiceCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalService.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(MedicalServiceCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalService.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(MedicalServiceDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalService.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(MedicalServiceDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalService.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(MedicalServiceFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalService.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(MedicalServiceFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalService.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(MedicalServiceFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.medicalService.findMany(input),
          ctx.prisma.medicalService.count({ where: input?.where }),
          ctx.prisma.medicalService.count(),
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
    .input(MedicalServiceFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalService.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(MedicalServiceFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.medicalService.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(MedicalServiceGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalService.groupBy({
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
  //   .input(MedicalServiceUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalService.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(MedicalServiceUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalService.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(MedicalServiceUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalService.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(MedicalServiceCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalService.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
