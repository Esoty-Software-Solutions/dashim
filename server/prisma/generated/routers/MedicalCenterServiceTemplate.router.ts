import { t, publicProcedure } from "./helpers/createRouter";
import { MedicalCenterServiceTemplateAggregateSchema } from "../schemas/aggregateMedicalCenterServiceTemplate.schema";
import { MedicalCenterServiceTemplateCreateManySchema } from "../schemas/createManyMedicalCenterServiceTemplate.schema";
import { MedicalCenterServiceTemplateCreateOneSchema } from "../schemas/createOneMedicalCenterServiceTemplate.schema";
import { MedicalCenterServiceTemplateDeleteManySchema } from "../schemas/deleteManyMedicalCenterServiceTemplate.schema";
import { MedicalCenterServiceTemplateDeleteOneSchema } from "../schemas/deleteOneMedicalCenterServiceTemplate.schema";
import { MedicalCenterServiceTemplateFindFirstSchema } from "../schemas/findFirstMedicalCenterServiceTemplate.schema";
import { MedicalCenterServiceTemplateFindManySchema } from "../schemas/findManyMedicalCenterServiceTemplate.schema";
import { MedicalCenterServiceTemplateFindUniqueSchema } from "../schemas/findUniqueMedicalCenterServiceTemplate.schema";
import { MedicalCenterServiceTemplateGroupBySchema } from "../schemas/groupByMedicalCenterServiceTemplate.schema";
import { MedicalCenterServiceTemplateUpdateManySchema } from "../schemas/updateManyMedicalCenterServiceTemplate.schema";
import { MedicalCenterServiceTemplateUpdateOneSchema } from "../schemas/updateOneMedicalCenterServiceTemplate.schema";
import { MedicalCenterServiceTemplateUpsertSchema } from "../schemas/upsertOneMedicalCenterServiceTemplate.schema";

export const medicalcenterservicetemplatesRouter = t.router({
  aggregateMedicalCenterServiceTemplate: publicProcedure
    .input(MedicalCenterServiceTemplateAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateMedicalCenterServiceTemplate = await ctx.prisma.medicalCenterServiceTemplate.aggregate(input);
      return aggregateMedicalCenterServiceTemplate;
    }),
  createManyMedicalCenterServiceTemplate: publicProcedure
    .input(MedicalCenterServiceTemplateCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyMedicalCenterServiceTemplate = await ctx.prisma.medicalCenterServiceTemplate.createMany(input);
      return createManyMedicalCenterServiceTemplate;
    }),
  createOneMedicalCenterServiceTemplate: publicProcedure
    .input(MedicalCenterServiceTemplateCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneMedicalCenterServiceTemplate = await ctx.prisma.medicalCenterServiceTemplate.create(input);
      return createOneMedicalCenterServiceTemplate;
    }),
  deleteManyMedicalCenterServiceTemplate: publicProcedure
    .input(MedicalCenterServiceTemplateDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyMedicalCenterServiceTemplate = await ctx.prisma.medicalCenterServiceTemplate.deleteMany(input);
      return deleteManyMedicalCenterServiceTemplate;
    }),
  deleteOneMedicalCenterServiceTemplate: publicProcedure
    .input(MedicalCenterServiceTemplateDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneMedicalCenterServiceTemplate = await ctx.prisma.medicalCenterServiceTemplate.delete(input);
      return deleteOneMedicalCenterServiceTemplate;
    }),
  findFirstMedicalCenterServiceTemplate: publicProcedure
    .input(MedicalCenterServiceTemplateFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstMedicalCenterServiceTemplate = await ctx.prisma.medicalCenterServiceTemplate.findFirst(input);
      return findFirstMedicalCenterServiceTemplate;
    }),
  findFirstMedicalCenterServiceTemplateOrThrow: publicProcedure
    .input(MedicalCenterServiceTemplateFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstMedicalCenterServiceTemplateOrThrow = await ctx.prisma.medicalCenterServiceTemplate.findFirstOrThrow(input);
      return findFirstMedicalCenterServiceTemplateOrThrow;
    }),
  findManyMedicalCenterServiceTemplate: publicProcedure
    .input(MedicalCenterServiceTemplateFindManySchema).query(async ({ ctx, input }) => {
      const findManyMedicalCenterServiceTemplate = await ctx.prisma.medicalCenterServiceTemplate.findMany(input);
      return findManyMedicalCenterServiceTemplate;
    }),
  findUniqueMedicalCenterServiceTemplate: publicProcedure
    .input(MedicalCenterServiceTemplateFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueMedicalCenterServiceTemplate = await ctx.prisma.medicalCenterServiceTemplate.findUnique(input);
      return findUniqueMedicalCenterServiceTemplate;
    }),
  findUniqueMedicalCenterServiceTemplateOrThrow: publicProcedure
    .input(MedicalCenterServiceTemplateFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueMedicalCenterServiceTemplateOrThrow = await ctx.prisma.medicalCenterServiceTemplate.findUniqueOrThrow(input);
      return findUniqueMedicalCenterServiceTemplateOrThrow;
    }),
  groupByMedicalCenterServiceTemplate: publicProcedure
    .input(MedicalCenterServiceTemplateGroupBySchema).query(async ({ ctx, input }) => {
      const groupByMedicalCenterServiceTemplate = await ctx.prisma.medicalCenterServiceTemplate.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByMedicalCenterServiceTemplate;
    }),
  updateManyMedicalCenterServiceTemplate: publicProcedure
    .input(MedicalCenterServiceTemplateUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyMedicalCenterServiceTemplate = await ctx.prisma.medicalCenterServiceTemplate.updateMany(input);
      return updateManyMedicalCenterServiceTemplate;
    }),
  updateOneMedicalCenterServiceTemplate: publicProcedure
    .input(MedicalCenterServiceTemplateUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneMedicalCenterServiceTemplate = await ctx.prisma.medicalCenterServiceTemplate.update(input);
      return updateOneMedicalCenterServiceTemplate;
    }),
  upsertOneMedicalCenterServiceTemplate: publicProcedure
    .input(MedicalCenterServiceTemplateUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneMedicalCenterServiceTemplate = await ctx.prisma.medicalCenterServiceTemplate.upsert(input);
      return upsertOneMedicalCenterServiceTemplate;
    }),

}) 
