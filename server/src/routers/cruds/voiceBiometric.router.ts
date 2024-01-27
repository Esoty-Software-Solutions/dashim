import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // VoiceBiometricAggregateSchema,
  VoiceBiometricCreateManySchema,
  VoiceBiometricCreateOneSchema,
  VoiceBiometricDeleteManySchema,
  VoiceBiometricDeleteOneSchema,
  VoiceBiometricFindFirstSchema,
  VoiceBiometricFindManySchema,
  VoiceBiometricFindUniqueSchema,
  // VoiceBiometricGroupBySchema,
  // VoiceBiometricUpdateManySchema,
  VoiceBiometricUpdateOneSchema,
  // VoiceBiometricUpsertSchema,
  VoiceBiometricCountSchema,
} from "@schemas/routers/voiceBiometric.schema";

export const voiceBiometricRouter = router({
  // aggregate: publicProcedure
  //   .input(VoiceBiometricAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.voiceBiometric.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(VoiceBiometricCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.voiceBiometric.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(VoiceBiometricCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.voiceBiometric.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(VoiceBiometricDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.voiceBiometric.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(VoiceBiometricDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.voiceBiometric.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(VoiceBiometricFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.voiceBiometric.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(VoiceBiometricFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.voiceBiometric.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(VoiceBiometricFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.voiceBiometric.findMany(input),
          ctx.prisma.voiceBiometric.count({ where: input?.where }),
          ctx.prisma.voiceBiometric.count(),
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
    .input(VoiceBiometricFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.voiceBiometric.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(VoiceBiometricFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.voiceBiometric.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(VoiceBiometricGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.voiceBiometric.groupBy({
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
  //   .input(VoiceBiometricUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.voiceBiometric.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(VoiceBiometricUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.voiceBiometric.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(VoiceBiometricUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.voiceBiometric.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(VoiceBiometricCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.voiceBiometric.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
