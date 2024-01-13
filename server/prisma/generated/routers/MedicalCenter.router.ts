import { t, publicProcedure } from "./helpers/createRouter";
import { MedicalCenterAggregateSchema } from "../schemas/aggregateMedicalCenter.schema";
import { MedicalCenterCreateManySchema } from "../schemas/createManyMedicalCenter.schema";
import { MedicalCenterCreateOneSchema } from "../schemas/createOneMedicalCenter.schema";
import { MedicalCenterDeleteManySchema } from "../schemas/deleteManyMedicalCenter.schema";
import { MedicalCenterDeleteOneSchema } from "../schemas/deleteOneMedicalCenter.schema";
import { MedicalCenterFindFirstSchema } from "../schemas/findFirstMedicalCenter.schema";
import { MedicalCenterFindManySchema } from "../schemas/findManyMedicalCenter.schema";
import { MedicalCenterFindUniqueSchema } from "../schemas/findUniqueMedicalCenter.schema";
import { MedicalCenterGroupBySchema } from "../schemas/groupByMedicalCenter.schema";
import { MedicalCenterUpdateManySchema } from "../schemas/updateManyMedicalCenter.schema";
import { MedicalCenterUpdateOneSchema } from "../schemas/updateOneMedicalCenter.schema";
import { MedicalCenterUpsertSchema } from "../schemas/upsertOneMedicalCenter.schema";

export const medicalcentersRouter = t.router({
  aggregateMedicalCenter: publicProcedure
    .input(MedicalCenterAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateMedicalCenter = await ctx.prisma.medicalCenter.aggregate(input);
      return aggregateMedicalCenter;
    }),
  createManyMedicalCenter: publicProcedure
    .input(MedicalCenterCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyMedicalCenter = await ctx.prisma.medicalCenter.createMany(input);
      return createManyMedicalCenter;
    }),
  createOneMedicalCenter: publicProcedure
    .input(MedicalCenterCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneMedicalCenter = await ctx.prisma.medicalCenter.create(input);
      return createOneMedicalCenter;
    }),
  deleteManyMedicalCenter: publicProcedure
    .input(MedicalCenterDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyMedicalCenter = await ctx.prisma.medicalCenter.deleteMany(input);
      return deleteManyMedicalCenter;
    }),
  deleteOneMedicalCenter: publicProcedure
    .input(MedicalCenterDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneMedicalCenter = await ctx.prisma.medicalCenter.delete(input);
      return deleteOneMedicalCenter;
    }),
  findFirstMedicalCenter: publicProcedure
    .input(MedicalCenterFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstMedicalCenter = await ctx.prisma.medicalCenter.findFirst(input);
      return findFirstMedicalCenter;
    }),
  findFirstMedicalCenterOrThrow: publicProcedure
    .input(MedicalCenterFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstMedicalCenterOrThrow = await ctx.prisma.medicalCenter.findFirstOrThrow(input);
      return findFirstMedicalCenterOrThrow;
    }),
  findManyMedicalCenter: publicProcedure
    .input(MedicalCenterFindManySchema).query(async ({ ctx, input }) => {
      const findManyMedicalCenter = await ctx.prisma.medicalCenter.findMany(input);
      return findManyMedicalCenter;
    }),
  findUniqueMedicalCenter: publicProcedure
    .input(MedicalCenterFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueMedicalCenter = await ctx.prisma.medicalCenter.findUnique(input);
      return findUniqueMedicalCenter;
    }),
  findUniqueMedicalCenterOrThrow: publicProcedure
    .input(MedicalCenterFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueMedicalCenterOrThrow = await ctx.prisma.medicalCenter.findUniqueOrThrow(input);
      return findUniqueMedicalCenterOrThrow;
    }),
  groupByMedicalCenter: publicProcedure
    .input(MedicalCenterGroupBySchema).query(async ({ ctx, input }) => {
      const groupByMedicalCenter = await ctx.prisma.medicalCenter.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByMedicalCenter;
    }),
  updateManyMedicalCenter: publicProcedure
    .input(MedicalCenterUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyMedicalCenter = await ctx.prisma.medicalCenter.updateMany(input);
      return updateManyMedicalCenter;
    }),
  updateOneMedicalCenter: publicProcedure
    .input(MedicalCenterUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneMedicalCenter = await ctx.prisma.medicalCenter.update(input);
      return updateOneMedicalCenter;
    }),
  upsertOneMedicalCenter: publicProcedure
    .input(MedicalCenterUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneMedicalCenter = await ctx.prisma.medicalCenter.upsert(input);
      return upsertOneMedicalCenter;
    }),

}) 
