import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // FingerprintBiometricAggregateSchema,
  FingerprintBiometricCreateManySchema,
  FingerprintBiometricCreateOneSchema,
  FingerprintBiometricDeleteManySchema,
  FingerprintBiometricDeleteOneSchema,
  // FingerprintBiometricFindFirstSchema,
  FingerprintBiometricFindManySchema,
  FingerprintBiometricFindUniqueSchema,
  // FingerprintBiometricGroupBySchema,
  // FingerprintBiometricUpdateManySchema,
  FingerprintBiometricUpdateOneSchema,
  // FingerprintBiometricUpsertSchema,
  FingerprintBiometricCountSchema,
} from "@schemas/routers/fingerprintBiometric.schema";

export const fingerprintBiometricRouter = router({
  // aggregate: publicProcedure
  //   .input(FingerprintBiometricAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.fingerprintBiometric.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(FingerprintBiometricCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerprintBiometric.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(FingerprintBiometricCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerprintBiometric.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(FingerprintBiometricDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerprintBiometric.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(FingerprintBiometricDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerprintBiometric.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirst: publicProcedure
  //   .input(FingerprintBiometricFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.fingerprintBiometric.findFirst(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // findFirstOrThrow: publicProcedure
  //   .input(FingerprintBiometricFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.fingerprintBiometric.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(FingerprintBiometricFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerprintBiometric.findMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(FingerprintBiometricFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerprintBiometric.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(FingerprintBiometricFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.fingerprintBiometric.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(FingerprintBiometricGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.fingerprintBiometric.groupBy({
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
  //   .input(FingerprintBiometricUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.fingerprintBiometric.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(FingerprintBiometricUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerprintBiometric.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(FingerprintBiometricUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.fingerprintBiometric.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(FingerprintBiometricCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.fingerprintBiometric.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
