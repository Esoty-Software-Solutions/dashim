import { t, publicProcedure } from "./helpers/createRouter";
import { DiagnosisAttachmentAggregateSchema } from "../schemas/aggregateDiagnosisAttachment.schema";
import { DiagnosisAttachmentCreateManySchema } from "../schemas/createManyDiagnosisAttachment.schema";
import { DiagnosisAttachmentCreateOneSchema } from "../schemas/createOneDiagnosisAttachment.schema";
import { DiagnosisAttachmentDeleteManySchema } from "../schemas/deleteManyDiagnosisAttachment.schema";
import { DiagnosisAttachmentDeleteOneSchema } from "../schemas/deleteOneDiagnosisAttachment.schema";
import { DiagnosisAttachmentFindFirstSchema } from "../schemas/findFirstDiagnosisAttachment.schema";
import { DiagnosisAttachmentFindManySchema } from "../schemas/findManyDiagnosisAttachment.schema";
import { DiagnosisAttachmentFindUniqueSchema } from "../schemas/findUniqueDiagnosisAttachment.schema";
import { DiagnosisAttachmentGroupBySchema } from "../schemas/groupByDiagnosisAttachment.schema";
import { DiagnosisAttachmentUpdateManySchema } from "../schemas/updateManyDiagnosisAttachment.schema";
import { DiagnosisAttachmentUpdateOneSchema } from "../schemas/updateOneDiagnosisAttachment.schema";
import { DiagnosisAttachmentUpsertSchema } from "../schemas/upsertOneDiagnosisAttachment.schema";

export const diagnosisattachmentsRouter = t.router({
  aggregateDiagnosisAttachment: publicProcedure
    .input(DiagnosisAttachmentAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateDiagnosisAttachment = await ctx.prisma.diagnosisAttachment.aggregate(input);
      return aggregateDiagnosisAttachment;
    }),
  createManyDiagnosisAttachment: publicProcedure
    .input(DiagnosisAttachmentCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyDiagnosisAttachment = await ctx.prisma.diagnosisAttachment.createMany(input);
      return createManyDiagnosisAttachment;
    }),
  createOneDiagnosisAttachment: publicProcedure
    .input(DiagnosisAttachmentCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneDiagnosisAttachment = await ctx.prisma.diagnosisAttachment.create(input);
      return createOneDiagnosisAttachment;
    }),
  deleteManyDiagnosisAttachment: publicProcedure
    .input(DiagnosisAttachmentDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyDiagnosisAttachment = await ctx.prisma.diagnosisAttachment.deleteMany(input);
      return deleteManyDiagnosisAttachment;
    }),
  deleteOneDiagnosisAttachment: publicProcedure
    .input(DiagnosisAttachmentDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneDiagnosisAttachment = await ctx.prisma.diagnosisAttachment.delete(input);
      return deleteOneDiagnosisAttachment;
    }),
  findFirstDiagnosisAttachment: publicProcedure
    .input(DiagnosisAttachmentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDiagnosisAttachment = await ctx.prisma.diagnosisAttachment.findFirst(input);
      return findFirstDiagnosisAttachment;
    }),
  findFirstDiagnosisAttachmentOrThrow: publicProcedure
    .input(DiagnosisAttachmentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDiagnosisAttachmentOrThrow = await ctx.prisma.diagnosisAttachment.findFirstOrThrow(input);
      return findFirstDiagnosisAttachmentOrThrow;
    }),
  findManyDiagnosisAttachment: publicProcedure
    .input(DiagnosisAttachmentFindManySchema).query(async ({ ctx, input }) => {
      const findManyDiagnosisAttachment = await ctx.prisma.diagnosisAttachment.findMany(input);
      return findManyDiagnosisAttachment;
    }),
  findUniqueDiagnosisAttachment: publicProcedure
    .input(DiagnosisAttachmentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDiagnosisAttachment = await ctx.prisma.diagnosisAttachment.findUnique(input);
      return findUniqueDiagnosisAttachment;
    }),
  findUniqueDiagnosisAttachmentOrThrow: publicProcedure
    .input(DiagnosisAttachmentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDiagnosisAttachmentOrThrow = await ctx.prisma.diagnosisAttachment.findUniqueOrThrow(input);
      return findUniqueDiagnosisAttachmentOrThrow;
    }),
  groupByDiagnosisAttachment: publicProcedure
    .input(DiagnosisAttachmentGroupBySchema).query(async ({ ctx, input }) => {
      const groupByDiagnosisAttachment = await ctx.prisma.diagnosisAttachment.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDiagnosisAttachment;
    }),
  updateManyDiagnosisAttachment: publicProcedure
    .input(DiagnosisAttachmentUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyDiagnosisAttachment = await ctx.prisma.diagnosisAttachment.updateMany(input);
      return updateManyDiagnosisAttachment;
    }),
  updateOneDiagnosisAttachment: publicProcedure
    .input(DiagnosisAttachmentUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneDiagnosisAttachment = await ctx.prisma.diagnosisAttachment.update(input);
      return updateOneDiagnosisAttachment;
    }),
  upsertOneDiagnosisAttachment: publicProcedure
    .input(DiagnosisAttachmentUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneDiagnosisAttachment = await ctx.prisma.diagnosisAttachment.upsert(input);
      return upsertOneDiagnosisAttachment;
    }),

}) 
