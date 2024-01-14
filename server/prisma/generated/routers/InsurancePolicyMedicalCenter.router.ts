import { t, publicProcedure } from "./helpers/createRouter";
import { InsurancePolicyMedicalCenterAggregateSchema } from "../schemas/aggregateInsurancePolicyMedicalCenter.schema";
import { InsurancePolicyMedicalCenterCreateManySchema } from "../schemas/createManyInsurancePolicyMedicalCenter.schema";
import { InsurancePolicyMedicalCenterCreateOneSchema } from "../schemas/createOneInsurancePolicyMedicalCenter.schema";
import { InsurancePolicyMedicalCenterDeleteManySchema } from "../schemas/deleteManyInsurancePolicyMedicalCenter.schema";
import { InsurancePolicyMedicalCenterDeleteOneSchema } from "../schemas/deleteOneInsurancePolicyMedicalCenter.schema";
import { InsurancePolicyMedicalCenterFindFirstSchema } from "../schemas/findFirstInsurancePolicyMedicalCenter.schema";
import { InsurancePolicyMedicalCenterFindManySchema } from "../schemas/findManyInsurancePolicyMedicalCenter.schema";
import { InsurancePolicyMedicalCenterFindUniqueSchema } from "../schemas/findUniqueInsurancePolicyMedicalCenter.schema";
import { InsurancePolicyMedicalCenterGroupBySchema } from "../schemas/groupByInsurancePolicyMedicalCenter.schema";
import { InsurancePolicyMedicalCenterUpdateManySchema } from "../schemas/updateManyInsurancePolicyMedicalCenter.schema";
import { InsurancePolicyMedicalCenterUpdateOneSchema } from "../schemas/updateOneInsurancePolicyMedicalCenter.schema";
import { InsurancePolicyMedicalCenterUpsertSchema } from "../schemas/upsertOneInsurancePolicyMedicalCenter.schema";

export const insurancepolicymedicalcentersRouter = t.router({
  aggregateInsurancePolicyMedicalCenter: publicProcedure
    .input(InsurancePolicyMedicalCenterAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateInsurancePolicyMedicalCenter = await ctx.prisma.insurancePolicyMedicalCenter.aggregate(input);
      return aggregateInsurancePolicyMedicalCenter;
    }),
  createManyInsurancePolicyMedicalCenter: publicProcedure
    .input(InsurancePolicyMedicalCenterCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyInsurancePolicyMedicalCenter = await ctx.prisma.insurancePolicyMedicalCenter.createMany(input);
      return createManyInsurancePolicyMedicalCenter;
    }),
  createOneInsurancePolicyMedicalCenter: publicProcedure
    .input(InsurancePolicyMedicalCenterCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneInsurancePolicyMedicalCenter = await ctx.prisma.insurancePolicyMedicalCenter.create(input);
      return createOneInsurancePolicyMedicalCenter;
    }),
  deleteManyInsurancePolicyMedicalCenter: publicProcedure
    .input(InsurancePolicyMedicalCenterDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyInsurancePolicyMedicalCenter = await ctx.prisma.insurancePolicyMedicalCenter.deleteMany(input);
      return deleteManyInsurancePolicyMedicalCenter;
    }),
  deleteOneInsurancePolicyMedicalCenter: publicProcedure
    .input(InsurancePolicyMedicalCenterDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneInsurancePolicyMedicalCenter = await ctx.prisma.insurancePolicyMedicalCenter.delete(input);
      return deleteOneInsurancePolicyMedicalCenter;
    }),
  findFirstInsurancePolicyMedicalCenter: publicProcedure
    .input(InsurancePolicyMedicalCenterFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstInsurancePolicyMedicalCenter = await ctx.prisma.insurancePolicyMedicalCenter.findFirst(input);
      return findFirstInsurancePolicyMedicalCenter;
    }),
  findFirstInsurancePolicyMedicalCenterOrThrow: publicProcedure
    .input(InsurancePolicyMedicalCenterFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstInsurancePolicyMedicalCenterOrThrow = await ctx.prisma.insurancePolicyMedicalCenter.findFirstOrThrow(input);
      return findFirstInsurancePolicyMedicalCenterOrThrow;
    }),
  findManyInsurancePolicyMedicalCenter: publicProcedure
    .input(InsurancePolicyMedicalCenterFindManySchema).query(async ({ ctx, input }) => {
      const findManyInsurancePolicyMedicalCenter = await ctx.prisma.insurancePolicyMedicalCenter.findMany(input);
      return findManyInsurancePolicyMedicalCenter;
    }),
  findUniqueInsurancePolicyMedicalCenter: publicProcedure
    .input(InsurancePolicyMedicalCenterFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueInsurancePolicyMedicalCenter = await ctx.prisma.insurancePolicyMedicalCenter.findUnique(input);
      return findUniqueInsurancePolicyMedicalCenter;
    }),
  findUniqueInsurancePolicyMedicalCenterOrThrow: publicProcedure
    .input(InsurancePolicyMedicalCenterFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueInsurancePolicyMedicalCenterOrThrow = await ctx.prisma.insurancePolicyMedicalCenter.findUniqueOrThrow(input);
      return findUniqueInsurancePolicyMedicalCenterOrThrow;
    }),
  groupByInsurancePolicyMedicalCenter: publicProcedure
    .input(InsurancePolicyMedicalCenterGroupBySchema).query(async ({ ctx, input }) => {
      const groupByInsurancePolicyMedicalCenter = await ctx.prisma.insurancePolicyMedicalCenter.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByInsurancePolicyMedicalCenter;
    }),
  updateManyInsurancePolicyMedicalCenter: publicProcedure
    .input(InsurancePolicyMedicalCenterUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyInsurancePolicyMedicalCenter = await ctx.prisma.insurancePolicyMedicalCenter.updateMany(input);
      return updateManyInsurancePolicyMedicalCenter;
    }),
  updateOneInsurancePolicyMedicalCenter: publicProcedure
    .input(InsurancePolicyMedicalCenterUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneInsurancePolicyMedicalCenter = await ctx.prisma.insurancePolicyMedicalCenter.update(input);
      return updateOneInsurancePolicyMedicalCenter;
    }),
  upsertOneInsurancePolicyMedicalCenter: publicProcedure
    .input(InsurancePolicyMedicalCenterUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneInsurancePolicyMedicalCenter = await ctx.prisma.insurancePolicyMedicalCenter.upsert(input);
      return upsertOneInsurancePolicyMedicalCenter;
    }),

}) 
