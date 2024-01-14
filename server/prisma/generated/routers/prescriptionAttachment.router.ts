import { t, publicProcedure } from "./helpers/createRouter";
import { prescriptionAttachmentAggregateSchema } from "../schemas/aggregateprescriptionAttachment.schema";
import { prescriptionAttachmentCreateManySchema } from "../schemas/createManyprescriptionAttachment.schema";
import { prescriptionAttachmentCreateOneSchema } from "../schemas/createOneprescriptionAttachment.schema";
import { prescriptionAttachmentDeleteManySchema } from "../schemas/deleteManyprescriptionAttachment.schema";
import { prescriptionAttachmentDeleteOneSchema } from "../schemas/deleteOneprescriptionAttachment.schema";
import { prescriptionAttachmentFindFirstSchema } from "../schemas/findFirstprescriptionAttachment.schema";
import { prescriptionAttachmentFindManySchema } from "../schemas/findManyprescriptionAttachment.schema";
import { prescriptionAttachmentFindUniqueSchema } from "../schemas/findUniqueprescriptionAttachment.schema";
import { prescriptionAttachmentGroupBySchema } from "../schemas/groupByprescriptionAttachment.schema";
import { prescriptionAttachmentUpdateManySchema } from "../schemas/updateManyprescriptionAttachment.schema";
import { prescriptionAttachmentUpdateOneSchema } from "../schemas/updateOneprescriptionAttachment.schema";
import { prescriptionAttachmentUpsertSchema } from "../schemas/upsertOneprescriptionAttachment.schema";

export const prescriptionattachmentsRouter = t.router({
  aggregateprescriptionAttachment: publicProcedure
    .input(prescriptionAttachmentAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateprescriptionAttachment = await ctx.prisma.prescriptionAttachment.aggregate(input);
      return aggregateprescriptionAttachment;
    }),
  createManyprescriptionAttachment: publicProcedure
    .input(prescriptionAttachmentCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyprescriptionAttachment = await ctx.prisma.prescriptionAttachment.createMany(input);
      return createManyprescriptionAttachment;
    }),
  createOneprescriptionAttachment: publicProcedure
    .input(prescriptionAttachmentCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneprescriptionAttachment = await ctx.prisma.prescriptionAttachment.create(input);
      return createOneprescriptionAttachment;
    }),
  deleteManyprescriptionAttachment: publicProcedure
    .input(prescriptionAttachmentDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyprescriptionAttachment = await ctx.prisma.prescriptionAttachment.deleteMany(input);
      return deleteManyprescriptionAttachment;
    }),
  deleteOneprescriptionAttachment: publicProcedure
    .input(prescriptionAttachmentDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneprescriptionAttachment = await ctx.prisma.prescriptionAttachment.delete(input);
      return deleteOneprescriptionAttachment;
    }),
  findFirstprescriptionAttachment: publicProcedure
    .input(prescriptionAttachmentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstprescriptionAttachment = await ctx.prisma.prescriptionAttachment.findFirst(input);
      return findFirstprescriptionAttachment;
    }),
  findFirstprescriptionAttachmentOrThrow: publicProcedure
    .input(prescriptionAttachmentFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstprescriptionAttachmentOrThrow = await ctx.prisma.prescriptionAttachment.findFirstOrThrow(input);
      return findFirstprescriptionAttachmentOrThrow;
    }),
  findManyprescriptionAttachment: publicProcedure
    .input(prescriptionAttachmentFindManySchema).query(async ({ ctx, input }) => {
      const findManyprescriptionAttachment = await ctx.prisma.prescriptionAttachment.findMany(input);
      return findManyprescriptionAttachment;
    }),
  findUniqueprescriptionAttachment: publicProcedure
    .input(prescriptionAttachmentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueprescriptionAttachment = await ctx.prisma.prescriptionAttachment.findUnique(input);
      return findUniqueprescriptionAttachment;
    }),
  findUniqueprescriptionAttachmentOrThrow: publicProcedure
    .input(prescriptionAttachmentFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueprescriptionAttachmentOrThrow = await ctx.prisma.prescriptionAttachment.findUniqueOrThrow(input);
      return findUniqueprescriptionAttachmentOrThrow;
    }),
  groupByprescriptionAttachment: publicProcedure
    .input(prescriptionAttachmentGroupBySchema).query(async ({ ctx, input }) => {
      const groupByprescriptionAttachment = await ctx.prisma.prescriptionAttachment.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByprescriptionAttachment;
    }),
  updateManyprescriptionAttachment: publicProcedure
    .input(prescriptionAttachmentUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyprescriptionAttachment = await ctx.prisma.prescriptionAttachment.updateMany(input);
      return updateManyprescriptionAttachment;
    }),
  updateOneprescriptionAttachment: publicProcedure
    .input(prescriptionAttachmentUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneprescriptionAttachment = await ctx.prisma.prescriptionAttachment.update(input);
      return updateOneprescriptionAttachment;
    }),
  upsertOneprescriptionAttachment: publicProcedure
    .input(prescriptionAttachmentUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneprescriptionAttachment = await ctx.prisma.prescriptionAttachment.upsert(input);
      return upsertOneprescriptionAttachment;
    }),

}) 
