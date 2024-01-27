import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // InsurancePolicyAggregateSchema,
  InsurancePolicyCreateManySchema,
  InsurancePolicyCreateOneSchema,
  InsurancePolicyDeleteManySchema,
  InsurancePolicyDeleteOneSchema,
  InsurancePolicyFindFirstSchema,
  InsurancePolicyFindManySchema,
  InsurancePolicyFindUniqueSchema,
  // InsurancePolicyGroupBySchema,
  // InsurancePolicyUpdateManySchema,
  InsurancePolicyUpdateOneSchema,
  // InsurancePolicyUpsertSchema,
  InsurancePolicyCountSchema,
} from "@schemas/routers/insurancePolicy.schema";

export const insurancePolicyRouter = router({
  // aggregate: publicProcedure
  //   .input(InsurancePolicyAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.insurancePolicy.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(InsurancePolicyCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicy.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(InsurancePolicyCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicy.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(InsurancePolicyDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicy.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(InsurancePolicyDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicy.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(InsurancePolicyFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicy.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(InsurancePolicyFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.insurancePolicy.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(InsurancePolicyFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.insurancePolicy.findMany(input),
          ctx.prisma.insurancePolicy.count({ where: input?.where }),
          ctx.prisma.insurancePolicy.count(),
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
    .input(InsurancePolicyFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicy.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(InsurancePolicyFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.insurancePolicy.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(InsurancePolicyGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.insurancePolicy.groupBy({
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
  //   .input(InsurancePolicyUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.insurancePolicy.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(InsurancePolicyUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicy.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(InsurancePolicyUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.insurancePolicy.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(InsurancePolicyCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.insurancePolicy.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
