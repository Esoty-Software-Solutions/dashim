import { t, publicProcedure } from "./helpers/createRouter";
import { InsurancePolicyMedicalCentersAggregateSchema } from "../schemas/aggregateInsurancePolicyMedicalCenters.schema";
import { InsurancePolicyMedicalCentersCreateManySchema } from "../schemas/createManyInsurancePolicyMedicalCenters.schema";
import { InsurancePolicyMedicalCentersCreateOneSchema } from "../schemas/createOneInsurancePolicyMedicalCenters.schema";
import { InsurancePolicyMedicalCentersDeleteManySchema } from "../schemas/deleteManyInsurancePolicyMedicalCenters.schema";
import { InsurancePolicyMedicalCentersDeleteOneSchema } from "../schemas/deleteOneInsurancePolicyMedicalCenters.schema";
import { InsurancePolicyMedicalCentersFindFirstSchema } from "../schemas/findFirstInsurancePolicyMedicalCenters.schema";
import { InsurancePolicyMedicalCentersFindManySchema } from "../schemas/findManyInsurancePolicyMedicalCenters.schema";
import { InsurancePolicyMedicalCentersFindUniqueSchema } from "../schemas/findUniqueInsurancePolicyMedicalCenters.schema";
import { InsurancePolicyMedicalCentersGroupBySchema } from "../schemas/groupByInsurancePolicyMedicalCenters.schema";
import { InsurancePolicyMedicalCentersUpdateManySchema } from "../schemas/updateManyInsurancePolicyMedicalCenters.schema";
import { InsurancePolicyMedicalCentersUpdateOneSchema } from "../schemas/updateOneInsurancePolicyMedicalCenters.schema";
import { InsurancePolicyMedicalCentersUpsertSchema } from "../schemas/upsertOneInsurancePolicyMedicalCenters.schema";

export const insurancepolicymedicalcentersRouter = t.router({
  aggregateInsurancePolicyMedicalCenters: publicProcedure
    .input(InsurancePolicyMedicalCentersAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateInsurancePolicyMedicalCenters = await ctx.prisma.insurancePolicyMedicalCenters.aggregate(input);
      return aggregateInsurancePolicyMedicalCenters;
    }),
  createManyInsurancePolicyMedicalCenters: publicProcedure
    .input(InsurancePolicyMedicalCentersCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyInsurancePolicyMedicalCenters = await ctx.prisma.insurancePolicyMedicalCenters.createMany(input);
      return createManyInsurancePolicyMedicalCenters;
    }),
  createOneInsurancePolicyMedicalCenters: publicProcedure
    .input(InsurancePolicyMedicalCentersCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneInsurancePolicyMedicalCenters = await ctx.prisma.insurancePolicyMedicalCenters.create(input);
      return createOneInsurancePolicyMedicalCenters;
    }),
  deleteManyInsurancePolicyMedicalCenters: publicProcedure
    .input(InsurancePolicyMedicalCentersDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyInsurancePolicyMedicalCenters = await ctx.prisma.insurancePolicyMedicalCenters.deleteMany(input);
      return deleteManyInsurancePolicyMedicalCenters;
    }),
  deleteOneInsurancePolicyMedicalCenters: publicProcedure
    .input(InsurancePolicyMedicalCentersDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneInsurancePolicyMedicalCenters = await ctx.prisma.insurancePolicyMedicalCenters.delete(input);
      return deleteOneInsurancePolicyMedicalCenters;
    }),
  findFirstInsurancePolicyMedicalCenters: publicProcedure
    .input(InsurancePolicyMedicalCentersFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstInsurancePolicyMedicalCenters = await ctx.prisma.insurancePolicyMedicalCenters.findFirst(input);
      return findFirstInsurancePolicyMedicalCenters;
    }),
  findFirstInsurancePolicyMedicalCentersOrThrow: publicProcedure
    .input(InsurancePolicyMedicalCentersFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstInsurancePolicyMedicalCentersOrThrow = await ctx.prisma.insurancePolicyMedicalCenters.findFirstOrThrow(input);
      return findFirstInsurancePolicyMedicalCentersOrThrow;
    }),
  findManyInsurancePolicyMedicalCenters: publicProcedure
    .input(InsurancePolicyMedicalCentersFindManySchema).query(async ({ ctx, input }) => {
      const findManyInsurancePolicyMedicalCenters = await ctx.prisma.insurancePolicyMedicalCenters.findMany(input);
      return findManyInsurancePolicyMedicalCenters;
    }),
  findUniqueInsurancePolicyMedicalCenters: publicProcedure
    .input(InsurancePolicyMedicalCentersFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueInsurancePolicyMedicalCenters = await ctx.prisma.insurancePolicyMedicalCenters.findUnique(input);
      return findUniqueInsurancePolicyMedicalCenters;
    }),
  findUniqueInsurancePolicyMedicalCentersOrThrow: publicProcedure
    .input(InsurancePolicyMedicalCentersFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueInsurancePolicyMedicalCentersOrThrow = await ctx.prisma.insurancePolicyMedicalCenters.findUniqueOrThrow(input);
      return findUniqueInsurancePolicyMedicalCentersOrThrow;
    }),
  groupByInsurancePolicyMedicalCenters: publicProcedure
    .input(InsurancePolicyMedicalCentersGroupBySchema).query(async ({ ctx, input }) => {
      const groupByInsurancePolicyMedicalCenters = await ctx.prisma.insurancePolicyMedicalCenters.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByInsurancePolicyMedicalCenters;
    }),
  updateManyInsurancePolicyMedicalCenters: publicProcedure
    .input(InsurancePolicyMedicalCentersUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyInsurancePolicyMedicalCenters = await ctx.prisma.insurancePolicyMedicalCenters.updateMany(input);
      return updateManyInsurancePolicyMedicalCenters;
    }),
  updateOneInsurancePolicyMedicalCenters: publicProcedure
    .input(InsurancePolicyMedicalCentersUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneInsurancePolicyMedicalCenters = await ctx.prisma.insurancePolicyMedicalCenters.update(input);
      return updateOneInsurancePolicyMedicalCenters;
    }),
  upsertOneInsurancePolicyMedicalCenters: publicProcedure
    .input(InsurancePolicyMedicalCentersUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneInsurancePolicyMedicalCenters = await ctx.prisma.insurancePolicyMedicalCenters.upsert(input);
      return upsertOneInsurancePolicyMedicalCenters;
    }),

}) 
