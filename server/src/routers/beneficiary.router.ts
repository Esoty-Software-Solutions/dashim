import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // BeneficiaryAggregateSchema,
  BeneficiaryCreateManySchema,
  BeneficiaryCreateOneSchema,
  BeneficiaryDeleteManySchema,
  BeneficiaryDeleteOneSchema,
  // BeneficiaryFindFirstSchema,
  BeneficiaryFindManySchema,
  BeneficiaryFindUniqueSchema,
  // BeneficiaryGroupBySchema,
  // BeneficiaryUpdateManySchema,
  BeneficiaryUpdateOneSchema,
  // BeneficiaryUpsertSchema,
  BeneficiaryCountSchema,
} from "@schemas/routers/beneficiary.schema";

export const beneficiaryRouter = router({
  // aggregate: publicProcedure
  //   .input(BeneficiaryAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiary.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(BeneficiaryCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiary.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(BeneficiaryCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiary.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(BeneficiaryDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiary.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(BeneficiaryDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiary.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(BeneficiaryFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiary.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(BeneficiaryFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiary.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(BeneficiaryFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiary.findMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(BeneficiaryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiary.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(BeneficiaryFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.beneficiary.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(BeneficiaryGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiary.groupBy({
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
  //   .input(BeneficiaryUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiary.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(BeneficiaryUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiary.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(BeneficiaryUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiary.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(BeneficiaryCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.beneficiary.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
