import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // InsurancePolicyMedicalCenterAggregateSchema,
  InsurancePolicyMedicalCenterCreateManySchema,
  InsurancePolicyMedicalCenterCreateOneSchema,
  InsurancePolicyMedicalCenterDeleteManySchema,
  InsurancePolicyMedicalCenterDeleteOneSchema,
  InsurancePolicyMedicalCenterFindFirstSchema,
  InsurancePolicyMedicalCenterFindManySchema,
  InsurancePolicyMedicalCenterFindUniqueSchema,
  // InsurancePolicyMedicalCenterGroupBySchema,
  // InsurancePolicyMedicalCenterUpdateManySchema,
  InsurancePolicyMedicalCenterUpdateOneSchema,
  // InsurancePolicyMedicalCenterUpsertSchema,
  InsurancePolicyMedicalCenterCountSchema,
} from "@schemas/routers/insurancePolicyMedicalCenter.schema";

export const insurancePolicyMedicalCenterRouter = router({
  // aggregate: publicProcedure
  //   .input(InsurancePolicyMedicalCenterAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.insurancePolicyMedicalCenter.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(InsurancePolicyMedicalCenterCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicyMedicalCenter.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(InsurancePolicyMedicalCenterCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicyMedicalCenter.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(InsurancePolicyMedicalCenterDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicyMedicalCenter.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(InsurancePolicyMedicalCenterDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicyMedicalCenter.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(InsurancePolicyMedicalCenterFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicyMedicalCenter.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(InsurancePolicyMedicalCenterFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.insurancePolicyMedicalCenter.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(InsurancePolicyMedicalCenterFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.insurancePolicyMedicalCenter.findMany(input),
          ctx.prisma.insurancePolicyMedicalCenter.count({ where: input?.where }),
          ctx.prisma.insurancePolicyMedicalCenter.count(),
        ]);
        return {
          data,
          fCount,
          uFCount,
        };
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(InsurancePolicyMedicalCenterFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicyMedicalCenter.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(InsurancePolicyMedicalCenterFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.insurancePolicyMedicalCenter.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(InsurancePolicyMedicalCenterGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.insurancePolicyMedicalCenter.groupBy({
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
  //   .input(InsurancePolicyMedicalCenterUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.insurancePolicyMedicalCenter.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(InsurancePolicyMedicalCenterUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicyMedicalCenter.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(InsurancePolicyMedicalCenterUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.insurancePolicyMedicalCenter.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(InsurancePolicyMedicalCenterCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicyMedicalCenter.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
