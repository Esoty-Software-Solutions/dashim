import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // BeneficiaryBalanceAggregateSchema,
  BeneficiaryBalanceCreateManySchema,
  BeneficiaryBalanceCreateOneSchema,
  BeneficiaryBalanceDeleteManySchema,
  BeneficiaryBalanceDeleteOneSchema,
  BeneficiaryBalanceFindFirstSchema,
  BeneficiaryBalanceFindManySchema,
  BeneficiaryBalanceFindUniqueSchema,
  // BeneficiaryBalanceGroupBySchema,
  // BeneficiaryBalanceUpdateManySchema,
  BeneficiaryBalanceUpdateOneSchema,
  // BeneficiaryBalanceUpsertSchema,
  BeneficiaryBalanceCountSchema,
} from "@schemas/routers/beneficiaryBalance.schema";

export const beneficiaryBalanceRouter = router({
  // aggregate: publicProcedure
  //   .input(BeneficiaryBalanceAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryBalance.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(BeneficiaryBalanceCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryBalance.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(BeneficiaryBalanceCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryBalance.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(BeneficiaryBalanceDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryBalance.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(BeneficiaryBalanceDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryBalance.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(BeneficiaryBalanceFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryBalance.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(BeneficiaryBalanceFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryBalance.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(BeneficiaryBalanceFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.beneficiaryBalance.findMany(input),
          ctx.prisma.beneficiaryBalance.count({ where: input?.where }),
          ctx.prisma.beneficiaryBalance.count(),
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
    .input(BeneficiaryBalanceFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryBalance.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(BeneficiaryBalanceFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.beneficiaryBalance.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(BeneficiaryBalanceGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryBalance.groupBy({
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
  //   .input(BeneficiaryBalanceUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryBalance.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(BeneficiaryBalanceUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryBalance.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(BeneficiaryBalanceUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryBalance.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(BeneficiaryBalanceCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryBalance.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
