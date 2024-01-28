import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // PrescriptionAttachmentAggregateSchema,
  PrescriptionAttachmentCreateManySchema,
  PrescriptionAttachmentCreateOneSchema,
  PrescriptionAttachmentDeleteManySchema,
  PrescriptionAttachmentDeleteOneSchema,
  PrescriptionAttachmentFindFirstSchema,
  PrescriptionAttachmentFindManySchema,
  PrescriptionAttachmentFindUniqueSchema,
  // PrescriptionAttachmentGroupBySchema,
  // PrescriptionAttachmentUpdateManySchema,
  PrescriptionAttachmentUpdateOneSchema,
  // PrescriptionAttachmentUpsertSchema,
  PrescriptionAttachmentCountSchema,
} from "@schemas/routers/prescriptionAttachment.schema";

export const prescriptionAttachmentRouter = router({
  // aggregate: publicProcedure
  //   .input(PrescriptionAttachmentAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.prescriptionAttachment.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(PrescriptionAttachmentCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.prescriptionAttachment.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(PrescriptionAttachmentCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.prescriptionAttachment.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(PrescriptionAttachmentDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.prescriptionAttachment.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(PrescriptionAttachmentDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.prescriptionAttachment.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(PrescriptionAttachmentFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.prescriptionAttachment.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(PrescriptionAttachmentFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.prescriptionAttachment.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(PrescriptionAttachmentFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [subscribers, filteredCount, unFilteredCount] = await Promise.all(
          [
            ctx.prisma.prescriptionAttachment.findMany(input),
            ctx.prisma.prescriptionAttachment.count({ where: input?.where }),
            ctx.prisma.prescriptionAttachment.count(),
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
    .input(PrescriptionAttachmentFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.prescriptionAttachment.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(PrescriptionAttachmentFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.prescriptionAttachment.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(PrescriptionAttachmentGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.prescriptionAttachment.groupBy({
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
  //   .input(PrescriptionAttachmentUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.prescriptionAttachment.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(PrescriptionAttachmentUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.prescriptionAttachment.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(PrescriptionAttachmentUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.prescriptionAttachment.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(PrescriptionAttachmentCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.prescriptionAttachment.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
