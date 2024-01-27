import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // BenefitPackageAggregateSchema,
  BenefitPackageCreateManySchema,
  BenefitPackageCreateOneSchema,
  BenefitPackageDeleteManySchema,
  BenefitPackageDeleteOneSchema,
  BenefitPackageFindFirstSchema,
  BenefitPackageFindManySchema,
  BenefitPackageFindUniqueSchema,
  // BenefitPackageGroupBySchema,
  // BenefitPackageUpdateManySchema,
  BenefitPackageUpdateOneSchema,
  // BenefitPackageUpsertSchema,
  BenefitPackageCountSchema,
} from "@schemas/routers/benefitPackage.schema";

export const benefitPackageRouter = router({
  // aggregate: publicProcedure
  //   .input(BenefitPackageAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackage.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(BenefitPackageCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackage.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(BenefitPackageCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackage.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(BenefitPackageDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackage.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(BenefitPackageDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackage.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(BenefitPackageFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackage.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(BenefitPackageFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackage.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(BenefitPackageFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.benefitPackage.findMany(input),
          ctx.prisma.benefitPackage.count({ where: input?.where }),
          ctx.prisma.benefitPackage.count(),
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
    .input(BenefitPackageFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackage.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(BenefitPackageFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.benefitPackage.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(BenefitPackageGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackage.groupBy({
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
  //   .input(BenefitPackageUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackage.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(BenefitPackageUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackage.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(BenefitPackageUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.benefitPackage.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(BenefitPackageCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.benefitPackage.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
