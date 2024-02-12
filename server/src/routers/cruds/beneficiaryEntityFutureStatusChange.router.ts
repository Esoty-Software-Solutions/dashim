import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // BeneficiaryEntityFutureStatusChangeAggregateSchema,
  BeneficiaryEntityFutureStatusChangeCreateManySchema,
  BeneficiaryEntityFutureStatusChangeCreateOneSchema,
  BeneficiaryEntityFutureStatusChangeDeleteManySchema,
  BeneficiaryEntityFutureStatusChangeDeleteOneSchema,
  BeneficiaryEntityFutureStatusChangeFindFirstSchema,
  BeneficiaryEntityFutureStatusChangeFindManySchema,
  BeneficiaryEntityFutureStatusChangeFindUniqueSchema,
  // BeneficiaryEntityFutureStatusChangeGroupBySchema,
  // BeneficiaryEntityFutureStatusChangeUpdateManySchema,
  BeneficiaryEntityFutureStatusChangeUpdateOneSchema,
  // BeneficiaryEntityFutureStatusChangeUpsertSchema,
  BeneficiaryEntityFutureStatusChangeCountSchema,
} from "@schemas/routers/beneficiaryEntityFutureStatusChange.schema";

export const beneficiaryEntityFutureStatusChangeRouter = router({
  // aggregate: publicProcedure
  //   .input(BeneficiaryEntityFutureStatusChangeAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryEntityFutureStatusChange.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(BeneficiaryEntityFutureStatusChangeCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryEntityFutureStatusChange.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(BeneficiaryEntityFutureStatusChangeCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryEntityFutureStatusChange.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(BeneficiaryEntityFutureStatusChangeDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryEntityFutureStatusChange.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(BeneficiaryEntityFutureStatusChangeDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryEntityFutureStatusChange.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(BeneficiaryEntityFutureStatusChangeFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryEntityFutureStatusChange.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(BeneficiaryEntityFutureStatusChangeFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryEntityFutureStatusChange.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(BeneficiaryEntityFutureStatusChangeFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.beneficiaryEntityFutureStatusChange.findMany(input),
          ctx.prisma.beneficiaryEntityFutureStatusChange.count({ where: input?.where }),
          ctx.prisma.beneficiaryEntityFutureStatusChange.count(),
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
    .input(BeneficiaryEntityFutureStatusChangeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryEntityFutureStatusChange.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(BeneficiaryEntityFutureStatusChangeFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.beneficiaryEntityFutureStatusChange.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(BeneficiaryEntityFutureStatusChangeGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryEntityFutureStatusChange.groupBy({
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
  //   .input(BeneficiaryEntityFutureStatusChangeUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryEntityFutureStatusChange.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(BeneficiaryEntityFutureStatusChangeUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryEntityFutureStatusChange.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(BeneficiaryEntityFutureStatusChangeUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiaryEntityFutureStatusChange.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(BeneficiaryEntityFutureStatusChangeCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiaryEntityFutureStatusChange.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
