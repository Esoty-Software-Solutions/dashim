import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // BeneficiaryServiceAggregateSchema,
  BeneficiaryServiceCreateManySchema,
  BeneficiaryServiceCreateOneSchema,
  BeneficiaryServiceDeleteManySchema,
  BeneficiaryServiceDeleteOneSchema,
  BeneficiaryServiceFindFirstSchema,
  BeneficiaryServiceFindManySchema,
  BeneficiaryServiceFindUniqueSchema,
  // BeneficiaryServiceGroupBySchema,
  // BeneficiaryServiceUpdateManySchema,
  BeneficiaryServiceUpdateOneSchema,
  // BeneficiaryServiceUpsertSchema,
  BeneficiaryServiceCountSchema,
} from "@schemas/routers/beneficiaryService.schema";

export const beneficiaryServiceRouter = router({
  // aggregate: publicProcedure
  //   .input(BeneficiaryServiceAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryService.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(BeneficiaryServiceCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryService.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(BeneficiaryServiceCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryService.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(BeneficiaryServiceDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryService.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(BeneficiaryServiceDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryService.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(BeneficiaryServiceFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryService.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(BeneficiaryServiceFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryService.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(BeneficiaryServiceFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.beneficiaryService.findMany(input),
          ctx.prisma.beneficiaryService.count({ where: input?.where }),
          ctx.prisma.beneficiaryService.count(),
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
    .input(BeneficiaryServiceFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryService.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(BeneficiaryServiceFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.beneficiaryService.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(BeneficiaryServiceGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryService.groupBy({
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
  //   .input(BeneficiaryServiceUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryService.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(BeneficiaryServiceUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryService.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(BeneficiaryServiceUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryService.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(BeneficiaryServiceCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryService.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
