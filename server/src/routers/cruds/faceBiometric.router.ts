import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // FaceBiometricAggregateSchema,
  FaceBiometricCreateManySchema,
  FaceBiometricCreateOneSchema,
  FaceBiometricDeleteManySchema,
  FaceBiometricDeleteOneSchema,
  FaceBiometricFindFirstSchema,
  FaceBiometricFindManySchema,
  FaceBiometricFindUniqueSchema,
  // FaceBiometricGroupBySchema,
  // FaceBiometricUpdateManySchema,
  FaceBiometricUpdateOneSchema,
  // FaceBiometricUpsertSchema,
  FaceBiometricCountSchema,
} from "@schemas/routers/faceBiometric.schema";

export const faceBiometricRouter = router({
  // aggregate: publicProcedure
  //   .input(FaceBiometricAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.faceBiometric.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(FaceBiometricCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.faceBiometric.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(FaceBiometricCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.faceBiometric.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(FaceBiometricDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.faceBiometric.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(FaceBiometricDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.faceBiometric.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(FaceBiometricFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.faceBiometric.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(FaceBiometricFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.faceBiometric.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(FaceBiometricFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.faceBiometric.findMany(input),
          ctx.prisma.faceBiometric.count({ where: input?.where }),
          ctx.prisma.faceBiometric.count(),
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
    .input(FaceBiometricFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.faceBiometric.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(FaceBiometricFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.faceBiometric.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(FaceBiometricGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.faceBiometric.groupBy({
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
  //   .input(FaceBiometricUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.faceBiometric.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(FaceBiometricUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.faceBiometric.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(FaceBiometricUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.faceBiometric.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(FaceBiometricCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.faceBiometric.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
