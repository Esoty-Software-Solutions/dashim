import { t, publicProcedure } from "./helpers/createRouter";
import { LabReportAttachmentAggregateSchema } from "../schemas/aggregateLabReportAttachment.schema";
import { LabReportAttachmentCreateManySchema } from "../schemas/createManyLabReportAttachment.schema";
import { LabReportAttachmentCreateOneSchema } from "../schemas/createOneLabReportAttachment.schema";
import { LabReportAttachmentDeleteManySchema } from "../schemas/deleteManyLabReportAttachment.schema";
import { LabReportAttachmentDeleteOneSchema } from "../schemas/deleteOneLabReportAttachment.schema";
import { LabReportAttachmentFindFirstSchema } from "../schemas/findFirstLabReportAttachment.schema";
import { LabReportAttachmentFindManySchema } from "../schemas/findManyLabReportAttachment.schema";
import { LabReportAttachmentFindUniqueSchema } from "../schemas/findUniqueLabReportAttachment.schema";
import { LabReportAttachmentGroupBySchema } from "../schemas/groupByLabReportAttachment.schema";
import { LabReportAttachmentUpdateManySchema } from "../schemas/updateManyLabReportAttachment.schema";
import { LabReportAttachmentUpdateOneSchema } from "../schemas/updateOneLabReportAttachment.schema";
import { LabReportAttachmentUpsertSchema } from "../schemas/upsertOneLabReportAttachment.schema";

export const labreportattachmentsRouter = t.router({
  aggregateLabReportAttachment: publicProcedure
    .input(LabReportAttachmentAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateLabReportAttachment = await ctx.prisma.labReportAttachment.aggregate(input);
      return aggregateLabReportAttachment;
    }),
  createManyLabReportAttachment: publicProcedure
    .input(LabReportAttachmentCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyLabReportAttachment = await ctx.prisma.labReportAttachment.createMany(input);
      return createManyLabReportAttachment;
    }),
  createOneLabReportAttachment: publicProcedure
    .input(LabReportAttachmentCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneLabReportAttachment = await ctx.prisma.labReportAttachment.create(input);
      return createOneLabReportAttachment;
    }),
  deleteManyLabReportAttachment: publicProcedure
    .input(LabReportAttachmentDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyLabReportAttachment = await ctx.prisma.labReportAttachment.deleteMany(input);
      return deleteManyLabReportAttachment;
    }),
  deleteOneLabReportAttachment: publicProcedure
    .input(LabReportAttachmentDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneLabReportAttachment = await ctx.prisma.labReportAttachment.delete(input);
      return deleteOneLabReportAttachment;
    }),
  findFirstLabReportAttachment: publicProcedure
    .input(LabReportAttachmentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstLabReportAttachment = await ctx.prisma.labReportAttachment.findFirst(input);
      return findFirstLabReportAttachment;
    }),
  findFirstLabReportAttachmentOrThrow: publicProcedure
    .input(LabReportAttachmentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstLabReportAttachmentOrThrow = await ctx.prisma.labReportAttachment.findFirstOrThrow(input);
      return findFirstLabReportAttachmentOrThrow;
    }),
  findManyLabReportAttachment: publicProcedure
    .input(LabReportAttachmentFindManySchema).query(async ({ ctx, input }) => {
      const findManyLabReportAttachment = await ctx.prisma.labReportAttachment.findMany(input);
      return findManyLabReportAttachment;
    }),
  findUniqueLabReportAttachment: publicProcedure
    .input(LabReportAttachmentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueLabReportAttachment = await ctx.prisma.labReportAttachment.findUnique(input);
      return findUniqueLabReportAttachment;
    }),
  findUniqueLabReportAttachmentOrThrow: publicProcedure
    .input(LabReportAttachmentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueLabReportAttachmentOrThrow = await ctx.prisma.labReportAttachment.findUniqueOrThrow(input);
      return findUniqueLabReportAttachmentOrThrow;
    }),
  groupByLabReportAttachment: publicProcedure
    .input(LabReportAttachmentGroupBySchema).query(async ({ ctx, input }) => {
      const groupByLabReportAttachment = await ctx.prisma.labReportAttachment.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByLabReportAttachment;
    }),
  updateManyLabReportAttachment: publicProcedure
    .input(LabReportAttachmentUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyLabReportAttachment = await ctx.prisma.labReportAttachment.updateMany(input);
      return updateManyLabReportAttachment;
    }),
  updateOneLabReportAttachment: publicProcedure
    .input(LabReportAttachmentUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneLabReportAttachment = await ctx.prisma.labReportAttachment.update(input);
      return updateOneLabReportAttachment;
    }),
  upsertOneLabReportAttachment: publicProcedure
    .input(LabReportAttachmentUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneLabReportAttachment = await ctx.prisma.labReportAttachment.upsert(input);
      return upsertOneLabReportAttachment;
    }),

}) 
