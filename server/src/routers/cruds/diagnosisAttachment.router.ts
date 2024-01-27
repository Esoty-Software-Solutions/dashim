import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // DiagnosisAttachmentAggregateSchema,
  DiagnosisAttachmentCreateManySchema,
  DiagnosisAttachmentCreateOneSchema,
  DiagnosisAttachmentDeleteManySchema,
  DiagnosisAttachmentDeleteOneSchema,
  DiagnosisAttachmentFindFirstSchema,
  DiagnosisAttachmentFindManySchema,
  DiagnosisAttachmentFindUniqueSchema,
  // DiagnosisAttachmentGroupBySchema,
  // DiagnosisAttachmentUpdateManySchema,
  DiagnosisAttachmentUpdateOneSchema,
  // DiagnosisAttachmentUpsertSchema,
  DiagnosisAttachmentCountSchema,
} from "@schemas/routers/diagnosisAttachment.schema";

export const diagnosisAttachmentRouter = router({
  // aggregate: publicProcedure
  //   .input(DiagnosisAttachmentAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.diagnosisAttachment.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(DiagnosisAttachmentCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.diagnosisAttachment.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(DiagnosisAttachmentCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.diagnosisAttachment.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(DiagnosisAttachmentDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.diagnosisAttachment.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(DiagnosisAttachmentDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.diagnosisAttachment.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(DiagnosisAttachmentFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.diagnosisAttachment.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(DiagnosisAttachmentFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.diagnosisAttachment.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(DiagnosisAttachmentFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.diagnosisAttachment.findMany(input),
          ctx.prisma.diagnosisAttachment.count({ where: input?.where }),
          ctx.prisma.diagnosisAttachment.count(),
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
    .input(DiagnosisAttachmentFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.diagnosisAttachment.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(DiagnosisAttachmentFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.diagnosisAttachment.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(DiagnosisAttachmentGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.diagnosisAttachment.groupBy({
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
  //   .input(DiagnosisAttachmentUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.diagnosisAttachment.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(DiagnosisAttachmentUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.diagnosisAttachment.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(DiagnosisAttachmentUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.diagnosisAttachment.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(DiagnosisAttachmentCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.diagnosisAttachment.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
