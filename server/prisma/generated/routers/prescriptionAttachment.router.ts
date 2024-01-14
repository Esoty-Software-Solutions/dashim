import { t, publicProcedure } from "./helpers/createRouter";
import { PrescriptionAttachmentAggregateSchema } from "../schemas/aggregatePrescriptionAttachment.schema";
import { PrescriptionAttachmentCreateManySchema } from "../schemas/createManyPrescriptionAttachment.schema";
import { PrescriptionAttachmentCreateOneSchema } from "../schemas/createOnePrescriptionAttachment.schema";
import { PrescriptionAttachmentDeleteManySchema } from "../schemas/deleteManyPrescriptionAttachment.schema";
import { PrescriptionAttachmentDeleteOneSchema } from "../schemas/deleteOnePrescriptionAttachment.schema";
import { PrescriptionAttachmentFindFirstSchema } from "../schemas/findFirstPrescriptionAttachment.schema";
import { PrescriptionAttachmentFindManySchema } from "../schemas/findManyPrescriptionAttachment.schema";
import { PrescriptionAttachmentFindUniqueSchema } from "../schemas/findUniquePrescriptionAttachment.schema";
import { PrescriptionAttachmentGroupBySchema } from "../schemas/groupByPrescriptionAttachment.schema";
import { PrescriptionAttachmentUpdateManySchema } from "../schemas/updateManyPrescriptionAttachment.schema";
import { PrescriptionAttachmentUpdateOneSchema } from "../schemas/updateOnePrescriptionAttachment.schema";
import { PrescriptionAttachmentUpsertSchema } from "../schemas/upsertOnePrescriptionAttachment.schema";

export const prescriptionattachmentsRouter = t.router({
  aggregatePrescriptionAttachment: publicProcedure
    .input(PrescriptionAttachmentAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePrescriptionAttachment = await ctx.prisma.prescriptionAttachment.aggregate(input);
      return aggregatePrescriptionAttachment;
    }),
  createManyPrescriptionAttachment: publicProcedure
    .input(PrescriptionAttachmentCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPrescriptionAttachment = await ctx.prisma.prescriptionAttachment.createMany(input);
      return createManyPrescriptionAttachment;
    }),
  createOnePrescriptionAttachment: publicProcedure
    .input(PrescriptionAttachmentCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePrescriptionAttachment = await ctx.prisma.prescriptionAttachment.create(input);
      return createOnePrescriptionAttachment;
    }),
  deleteManyPrescriptionAttachment: publicProcedure
    .input(PrescriptionAttachmentDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPrescriptionAttachment = await ctx.prisma.prescriptionAttachment.deleteMany(input);
      return deleteManyPrescriptionAttachment;
    }),
  deleteOnePrescriptionAttachment: publicProcedure
    .input(PrescriptionAttachmentDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePrescriptionAttachment = await ctx.prisma.prescriptionAttachment.delete(input);
      return deleteOnePrescriptionAttachment;
    }),
  findFirstPrescriptionAttachment: publicProcedure
    .input(PrescriptionAttachmentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrescriptionAttachment = await ctx.prisma.prescriptionAttachment.findFirst(input);
      return findFirstPrescriptionAttachment;
    }),
  findFirstPrescriptionAttachmentOrThrow: publicProcedure
    .input(PrescriptionAttachmentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPrescriptionAttachmentOrThrow = await ctx.prisma.prescriptionAttachment.findFirstOrThrow(input);
      return findFirstPrescriptionAttachmentOrThrow;
    }),
  findManyPrescriptionAttachment: publicProcedure
    .input(PrescriptionAttachmentFindManySchema).query(async ({ ctx, input }) => {
      const findManyPrescriptionAttachment = await ctx.prisma.prescriptionAttachment.findMany(input);
      return findManyPrescriptionAttachment;
    }),
  findUniquePrescriptionAttachment: publicProcedure
    .input(PrescriptionAttachmentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrescriptionAttachment = await ctx.prisma.prescriptionAttachment.findUnique(input);
      return findUniquePrescriptionAttachment;
    }),
  findUniquePrescriptionAttachmentOrThrow: publicProcedure
    .input(PrescriptionAttachmentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePrescriptionAttachmentOrThrow = await ctx.prisma.prescriptionAttachment.findUniqueOrThrow(input);
      return findUniquePrescriptionAttachmentOrThrow;
    }),
  groupByPrescriptionAttachment: publicProcedure
    .input(PrescriptionAttachmentGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPrescriptionAttachment = await ctx.prisma.prescriptionAttachment.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPrescriptionAttachment;
    }),
  updateManyPrescriptionAttachment: publicProcedure
    .input(PrescriptionAttachmentUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPrescriptionAttachment = await ctx.prisma.prescriptionAttachment.updateMany(input);
      return updateManyPrescriptionAttachment;
    }),
  updateOnePrescriptionAttachment: publicProcedure
    .input(PrescriptionAttachmentUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePrescriptionAttachment = await ctx.prisma.prescriptionAttachment.update(input);
      return updateOnePrescriptionAttachment;
    }),
  upsertOnePrescriptionAttachment: publicProcedure
    .input(PrescriptionAttachmentUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePrescriptionAttachment = await ctx.prisma.prescriptionAttachment.upsert(input);
      return upsertOnePrescriptionAttachment;
    }),

}) 
