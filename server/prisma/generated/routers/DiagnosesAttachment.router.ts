import { t, publicProcedure } from "./helpers/createRouter";
import { DiagnosesAttachmentAggregateSchema } from "../schemas/aggregateDiagnosesAttachment.schema";
import { DiagnosesAttachmentCreateManySchema } from "../schemas/createManyDiagnosesAttachment.schema";
import { DiagnosesAttachmentCreateOneSchema } from "../schemas/createOneDiagnosesAttachment.schema";
import { DiagnosesAttachmentDeleteManySchema } from "../schemas/deleteManyDiagnosesAttachment.schema";
import { DiagnosesAttachmentDeleteOneSchema } from "../schemas/deleteOneDiagnosesAttachment.schema";
import { DiagnosesAttachmentFindFirstSchema } from "../schemas/findFirstDiagnosesAttachment.schema";
import { DiagnosesAttachmentFindManySchema } from "../schemas/findManyDiagnosesAttachment.schema";
import { DiagnosesAttachmentFindUniqueSchema } from "../schemas/findUniqueDiagnosesAttachment.schema";
import { DiagnosesAttachmentGroupBySchema } from "../schemas/groupByDiagnosesAttachment.schema";
import { DiagnosesAttachmentUpdateManySchema } from "../schemas/updateManyDiagnosesAttachment.schema";
import { DiagnosesAttachmentUpdateOneSchema } from "../schemas/updateOneDiagnosesAttachment.schema";
import { DiagnosesAttachmentUpsertSchema } from "../schemas/upsertOneDiagnosesAttachment.schema";

export const diagnosesattachmentsRouter = t.router({
  aggregateDiagnosesAttachment: publicProcedure
    .input(DiagnosesAttachmentAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateDiagnosesAttachment = await ctx.prisma.diagnosesAttachment.aggregate(input);
      return aggregateDiagnosesAttachment;
    }),
  createManyDiagnosesAttachment: publicProcedure
    .input(DiagnosesAttachmentCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyDiagnosesAttachment = await ctx.prisma.diagnosesAttachment.createMany(input);
      return createManyDiagnosesAttachment;
    }),
  createOneDiagnosesAttachment: publicProcedure
    .input(DiagnosesAttachmentCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneDiagnosesAttachment = await ctx.prisma.diagnosesAttachment.create(input);
      return createOneDiagnosesAttachment;
    }),
  deleteManyDiagnosesAttachment: publicProcedure
    .input(DiagnosesAttachmentDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyDiagnosesAttachment = await ctx.prisma.diagnosesAttachment.deleteMany(input);
      return deleteManyDiagnosesAttachment;
    }),
  deleteOneDiagnosesAttachment: publicProcedure
    .input(DiagnosesAttachmentDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneDiagnosesAttachment = await ctx.prisma.diagnosesAttachment.delete(input);
      return deleteOneDiagnosesAttachment;
    }),
  findFirstDiagnosesAttachment: publicProcedure
    .input(DiagnosesAttachmentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDiagnosesAttachment = await ctx.prisma.diagnosesAttachment.findFirst(input);
      return findFirstDiagnosesAttachment;
    }),
  findFirstDiagnosesAttachmentOrThrow: publicProcedure
    .input(DiagnosesAttachmentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDiagnosesAttachmentOrThrow = await ctx.prisma.diagnosesAttachment.findFirstOrThrow(input);
      return findFirstDiagnosesAttachmentOrThrow;
    }),
  findManyDiagnosesAttachment: publicProcedure
    .input(DiagnosesAttachmentFindManySchema).query(async ({ ctx, input }) => {
      const findManyDiagnosesAttachment = await ctx.prisma.diagnosesAttachment.findMany(input);
      return findManyDiagnosesAttachment;
    }),
  findUniqueDiagnosesAttachment: publicProcedure
    .input(DiagnosesAttachmentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDiagnosesAttachment = await ctx.prisma.diagnosesAttachment.findUnique(input);
      return findUniqueDiagnosesAttachment;
    }),
  findUniqueDiagnosesAttachmentOrThrow: publicProcedure
    .input(DiagnosesAttachmentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDiagnosesAttachmentOrThrow = await ctx.prisma.diagnosesAttachment.findUniqueOrThrow(input);
      return findUniqueDiagnosesAttachmentOrThrow;
    }),
  groupByDiagnosesAttachment: publicProcedure
    .input(DiagnosesAttachmentGroupBySchema).query(async ({ ctx, input }) => {
      const groupByDiagnosesAttachment = await ctx.prisma.diagnosesAttachment.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDiagnosesAttachment;
    }),
  updateManyDiagnosesAttachment: publicProcedure
    .input(DiagnosesAttachmentUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyDiagnosesAttachment = await ctx.prisma.diagnosesAttachment.updateMany(input);
      return updateManyDiagnosesAttachment;
    }),
  updateOneDiagnosesAttachment: publicProcedure
    .input(DiagnosesAttachmentUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneDiagnosesAttachment = await ctx.prisma.diagnosesAttachment.update(input);
      return updateOneDiagnosesAttachment;
    }),
  upsertOneDiagnosesAttachment: publicProcedure
    .input(DiagnosesAttachmentUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneDiagnosesAttachment = await ctx.prisma.diagnosesAttachment.upsert(input);
      return upsertOneDiagnosesAttachment;
    }),

}) 
