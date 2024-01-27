import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // LabReportAttachmentAggregateSchema,
  LabReportAttachmentCreateManySchema,
  LabReportAttachmentCreateOneSchema,
  LabReportAttachmentDeleteManySchema,
  LabReportAttachmentDeleteOneSchema,
  LabReportAttachmentFindFirstSchema,
  LabReportAttachmentFindManySchema,
  LabReportAttachmentFindUniqueSchema,
  // LabReportAttachmentGroupBySchema,
  // LabReportAttachmentUpdateManySchema,
  LabReportAttachmentUpdateOneSchema,
  // LabReportAttachmentUpsertSchema,
  LabReportAttachmentCountSchema,
} from "@schemas/routers/labReportAttachment.schema";

export const labReportAttachmentRouter = router({
  // aggregate: publicProcedure
  //   .input(LabReportAttachmentAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.labReportAttachment.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(LabReportAttachmentCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.labReportAttachment.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(LabReportAttachmentCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.labReportAttachment.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(LabReportAttachmentDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.labReportAttachment.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(LabReportAttachmentDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.labReportAttachment.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(LabReportAttachmentFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.labReportAttachment.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(LabReportAttachmentFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.labReportAttachment.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(LabReportAttachmentFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.labReportAttachment.findMany(input),
          ctx.prisma.labReportAttachment.count({ where: input?.where }),
          ctx.prisma.labReportAttachment.count(),
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
    .input(LabReportAttachmentFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.labReportAttachment.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(LabReportAttachmentFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.labReportAttachment.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(LabReportAttachmentGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.labReportAttachment.groupBy({
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
  //   .input(LabReportAttachmentUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.labReportAttachment.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(LabReportAttachmentUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.labReportAttachment.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(LabReportAttachmentUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.labReportAttachment.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(LabReportAttachmentCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.labReportAttachment.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
