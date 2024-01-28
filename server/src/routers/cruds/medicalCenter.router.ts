import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // MedicalCenterAggregateSchema,
  MedicalCenterCreateManySchema,
  MedicalCenterCreateOneSchema,
  MedicalCenterDeleteManySchema,
  MedicalCenterDeleteOneSchema,
  MedicalCenterFindFirstSchema,
  MedicalCenterFindManySchema,
  MedicalCenterFindUniqueSchema,
  // MedicalCenterGroupBySchema,
  // MedicalCenterUpdateManySchema,
  MedicalCenterUpdateOneSchema,
  // MedicalCenterUpsertSchema,
  MedicalCenterCountSchema,
} from "@schemas/routers/medicalCenter.schema";

export const medicalCenterRouter = router({
  // aggregate: publicProcedure
  //   .input(MedicalCenterAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalCenter.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(MedicalCenterCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenter.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(MedicalCenterCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenter.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(MedicalCenterDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenter.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(MedicalCenterDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenter.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(MedicalCenterFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenter.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(MedicalCenterFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalCenter.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(MedicalCenterFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [subscribers, filteredCount, unFilteredCount] = await Promise.all(
          [
            ctx.prisma.medicalCenter.findMany(input),
            ctx.prisma.medicalCenter.count({ where: input?.where }),
            ctx.prisma.medicalCenter.count(),
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
    .input(MedicalCenterFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenter.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(MedicalCenterFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.medicalCenter.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(MedicalCenterGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalCenter.groupBy({
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
  //   .input(MedicalCenterUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalCenter.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(MedicalCenterUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenter.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(MedicalCenterUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.medicalCenter.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(MedicalCenterCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.medicalCenter.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
