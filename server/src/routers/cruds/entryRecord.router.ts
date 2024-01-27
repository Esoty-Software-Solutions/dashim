import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // EntryRecordAggregateSchema,
  EntryRecordCreateManySchema,
  EntryRecordCreateOneSchema,
  EntryRecordDeleteManySchema,
  EntryRecordDeleteOneSchema,
  EntryRecordFindFirstSchema,
  EntryRecordFindManySchema,
  EntryRecordFindUniqueSchema,
  // EntryRecordGroupBySchema,
  // EntryRecordUpdateManySchema,
  EntryRecordUpdateOneSchema,
  // EntryRecordUpsertSchema,
  EntryRecordCountSchema,
} from "@schemas/routers/entryRecord.schema";

export const entryRecordRouter = router({
  // aggregate: publicProcedure
  //   .input(EntryRecordAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.entryRecord.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(EntryRecordCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.entryRecord.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(EntryRecordCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.entryRecord.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(EntryRecordDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.entryRecord.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(EntryRecordDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.entryRecord.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(EntryRecordFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.entryRecord.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(EntryRecordFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.entryRecord.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(EntryRecordFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.entryRecord.findMany(input),
          ctx.prisma.entryRecord.count({ where: input?.where }),
          ctx.prisma.entryRecord.count(),
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
    .input(EntryRecordFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.entryRecord.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(EntryRecordFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.entryRecord.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(EntryRecordGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.entryRecord.groupBy({
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
  //   .input(EntryRecordUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.entryRecord.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(EntryRecordUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.entryRecord.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(EntryRecordUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.entryRecord.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(EntryRecordCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.entryRecord.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
