import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // BeneficiaryFutureStatusChangeAggregateSchema,
  BeneficiaryFutureStatusChangeCreateManySchema,
  BeneficiaryFutureStatusChangeCreateOneSchema,
  BeneficiaryFutureStatusChangeDeleteManySchema,
  BeneficiaryFutureStatusChangeDeleteOneSchema,
  BeneficiaryFutureStatusChangeFindFirstSchema,
  BeneficiaryFutureStatusChangeFindManySchema,
  BeneficiaryFutureStatusChangeFindUniqueSchema,
  // BeneficiaryFutureStatusChangeGroupBySchema,
  // BeneficiaryFutureStatusChangeUpdateManySchema,
  BeneficiaryFutureStatusChangeUpdateOneSchema,
  // BeneficiaryFutureStatusChangeUpsertSchema,
  BeneficiaryFutureStatusChangeCountSchema,
} from "@schemas/routers/beneficiaryFutureStatusChange.schema";

export const beneficiaryFutureStatusChangeRouter = router({
  // aggregate: publicProcedure
  //   .input(BeneficiaryFutureStatusChangeAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryFutureStatusChange.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(BeneficiaryFutureStatusChangeCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryFutureStatusChange.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(BeneficiaryFutureStatusChangeCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryFutureStatusChange.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(BeneficiaryFutureStatusChangeDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryFutureStatusChange.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(BeneficiaryFutureStatusChangeDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryFutureStatusChange.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(BeneficiaryFutureStatusChangeFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryFutureStatusChange.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(BeneficiaryFutureStatusChangeFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryFutureStatusChange.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(BeneficiaryFutureStatusChangeFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.beneficiaryFutureStatusChange.findMany(input),
          ctx.prisma.beneficiaryFutureStatusChange.count({ where: input?.where }),
          ctx.prisma.beneficiaryFutureStatusChange.count(),
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
    .input(BeneficiaryFutureStatusChangeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryFutureStatusChange.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(BeneficiaryFutureStatusChangeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.beneficiaryFutureStatusChange.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(BeneficiaryFutureStatusChangeGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryFutureStatusChange.groupBy({
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
  //   .input(BeneficiaryFutureStatusChangeUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryFutureStatusChange.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(BeneficiaryFutureStatusChangeUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryFutureStatusChange.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(BeneficiaryFutureStatusChangeUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryFutureStatusChange.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(BeneficiaryFutureStatusChangeCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryFutureStatusChange.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
