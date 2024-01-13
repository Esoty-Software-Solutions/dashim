import { t, publicProcedure } from "./helpers/createRouter";
import { InsurancePolicyAggregateSchema } from "../schemas/aggregateInsurancePolicy.schema";
import { InsurancePolicyCreateManySchema } from "../schemas/createManyInsurancePolicy.schema";
import { InsurancePolicyCreateOneSchema } from "../schemas/createOneInsurancePolicy.schema";
import { InsurancePolicyDeleteManySchema } from "../schemas/deleteManyInsurancePolicy.schema";
import { InsurancePolicyDeleteOneSchema } from "../schemas/deleteOneInsurancePolicy.schema";
import { InsurancePolicyFindFirstSchema } from "../schemas/findFirstInsurancePolicy.schema";
import { InsurancePolicyFindManySchema } from "../schemas/findManyInsurancePolicy.schema";
import { InsurancePolicyFindUniqueSchema } from "../schemas/findUniqueInsurancePolicy.schema";
import { InsurancePolicyGroupBySchema } from "../schemas/groupByInsurancePolicy.schema";
import { InsurancePolicyUpdateManySchema } from "../schemas/updateManyInsurancePolicy.schema";
import { InsurancePolicyUpdateOneSchema } from "../schemas/updateOneInsurancePolicy.schema";
import { InsurancePolicyUpsertSchema } from "../schemas/upsertOneInsurancePolicy.schema";

export const insurancepoliciesRouter = t.router({
  aggregateInsurancePolicy: publicProcedure
    .input(InsurancePolicyAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateInsurancePolicy = await ctx.prisma.insurancePolicy.aggregate(input);
      return aggregateInsurancePolicy;
    }),
  createManyInsurancePolicy: publicProcedure
    .input(InsurancePolicyCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyInsurancePolicy = await ctx.prisma.insurancePolicy.createMany(input);
      return createManyInsurancePolicy;
    }),
  createOneInsurancePolicy: publicProcedure
    .input(InsurancePolicyCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneInsurancePolicy = await ctx.prisma.insurancePolicy.create(input);
      return createOneInsurancePolicy;
    }),
  deleteManyInsurancePolicy: publicProcedure
    .input(InsurancePolicyDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyInsurancePolicy = await ctx.prisma.insurancePolicy.deleteMany(input);
      return deleteManyInsurancePolicy;
    }),
  deleteOneInsurancePolicy: publicProcedure
    .input(InsurancePolicyDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneInsurancePolicy = await ctx.prisma.insurancePolicy.delete(input);
      return deleteOneInsurancePolicy;
    }),
  findFirstInsurancePolicy: publicProcedure
    .input(InsurancePolicyFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstInsurancePolicy = await ctx.prisma.insurancePolicy.findFirst(input);
      return findFirstInsurancePolicy;
    }),
  findFirstInsurancePolicyOrThrow: publicProcedure
    .input(InsurancePolicyFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstInsurancePolicyOrThrow = await ctx.prisma.insurancePolicy.findFirstOrThrow(input);
      return findFirstInsurancePolicyOrThrow;
    }),
  findManyInsurancePolicy: publicProcedure
    .input(InsurancePolicyFindManySchema).query(async ({ ctx, input }) => {
      const findManyInsurancePolicy = await ctx.prisma.insurancePolicy.findMany(input);
      return findManyInsurancePolicy;
    }),
  findUniqueInsurancePolicy: publicProcedure
    .input(InsurancePolicyFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueInsurancePolicy = await ctx.prisma.insurancePolicy.findUnique(input);
      return findUniqueInsurancePolicy;
    }),
  findUniqueInsurancePolicyOrThrow: publicProcedure
    .input(InsurancePolicyFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueInsurancePolicyOrThrow = await ctx.prisma.insurancePolicy.findUniqueOrThrow(input);
      return findUniqueInsurancePolicyOrThrow;
    }),
  groupByInsurancePolicy: publicProcedure
    .input(InsurancePolicyGroupBySchema).query(async ({ ctx, input }) => {
      const groupByInsurancePolicy = await ctx.prisma.insurancePolicy.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByInsurancePolicy;
    }),
  updateManyInsurancePolicy: publicProcedure
    .input(InsurancePolicyUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyInsurancePolicy = await ctx.prisma.insurancePolicy.updateMany(input);
      return updateManyInsurancePolicy;
    }),
  updateOneInsurancePolicy: publicProcedure
    .input(InsurancePolicyUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneInsurancePolicy = await ctx.prisma.insurancePolicy.update(input);
      return updateOneInsurancePolicy;
    }),
  upsertOneInsurancePolicy: publicProcedure
    .input(InsurancePolicyUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneInsurancePolicy = await ctx.prisma.insurancePolicy.upsert(input);
      return upsertOneInsurancePolicy;
    }),

}) 
