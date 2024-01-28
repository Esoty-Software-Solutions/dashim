import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // InstitutionMedicalServiceAggregateSchema,
  InstitutionMedicalServiceCreateManySchema,
  InstitutionMedicalServiceCreateOneSchema,
  InstitutionMedicalServiceDeleteManySchema,
  InstitutionMedicalServiceDeleteOneSchema,
  InstitutionMedicalServiceFindFirstSchema,
  InstitutionMedicalServiceFindManySchema,
  InstitutionMedicalServiceFindUniqueSchema,
  // InstitutionMedicalServiceGroupBySchema,
  // InstitutionMedicalServiceUpdateManySchema,
  InstitutionMedicalServiceUpdateOneSchema,
  // InstitutionMedicalServiceUpsertSchema,
  InstitutionMedicalServiceCountSchema,
} from "@schemas/routers/institutionMedicalService.schema";

export const institutionMedicalServiceRouter = router({
  // aggregate: publicProcedure
  //   .input(InstitutionMedicalServiceAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institutionMedicalService.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(InstitutionMedicalServiceCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalService.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(InstitutionMedicalServiceCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalService.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(InstitutionMedicalServiceDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalService.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(InstitutionMedicalServiceDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalService.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(InstitutionMedicalServiceFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalService.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(InstitutionMedicalServiceFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institutionMedicalService.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(InstitutionMedicalServiceFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [subscribers, filteredCount, unFilteredCount] = await Promise.all(
          [
            ctx.prisma.institutionMedicalService.findMany(input),
            ctx.prisma.institutionMedicalService.count({ where: input?.where }),
            ctx.prisma.institutionMedicalService.count(),
          ],
        );
        const statistics: {
          key: string;
          value: string | number | boolean;
        }[] = [];
        return {
          data: subscribers,
          filteredCount,
          unFilteredCount,
          statistics,
        };
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(InstitutionMedicalServiceFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalService.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(InstitutionMedicalServiceFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.institutionMedicalService.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(InstitutionMedicalServiceGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institutionMedicalService.groupBy({
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
  //   .input(InstitutionMedicalServiceUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institutionMedicalService.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(InstitutionMedicalServiceUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalService.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(InstitutionMedicalServiceUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.institutionMedicalService.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(InstitutionMedicalServiceCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.institutionMedicalService.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
