import { t, publicProcedure } from "./helpers/createRouter";
import { BeneficiaryAggregateSchema } from "../schemas/aggregateBeneficiary.schema";
import { BeneficiaryCreateManySchema } from "../schemas/createManyBeneficiary.schema";
import { BeneficiaryCreateOneSchema } from "../schemas/createOneBeneficiary.schema";
import { BeneficiaryDeleteManySchema } from "../schemas/deleteManyBeneficiary.schema";
import { BeneficiaryDeleteOneSchema } from "../schemas/deleteOneBeneficiary.schema";
import { BeneficiaryFindFirstSchema } from "../schemas/findFirstBeneficiary.schema";
import { BeneficiaryFindManySchema } from "../schemas/findManyBeneficiary.schema";
import { BeneficiaryFindUniqueSchema } from "../schemas/findUniqueBeneficiary.schema";
import { BeneficiaryGroupBySchema } from "../schemas/groupByBeneficiary.schema";
import { BeneficiaryUpdateManySchema } from "../schemas/updateManyBeneficiary.schema";
import { BeneficiaryUpdateOneSchema } from "../schemas/updateOneBeneficiary.schema";
import { BeneficiaryUpsertSchema } from "../schemas/upsertOneBeneficiary.schema";

export const beneficiariesRouter = t.router({
  aggregateBeneficiary: publicProcedure
    .input(BeneficiaryAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateBeneficiary = await ctx.prisma.beneficiary.aggregate(input);
      return aggregateBeneficiary;
    }),
  createManyBeneficiary: publicProcedure
    .input(BeneficiaryCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyBeneficiary = await ctx.prisma.beneficiary.createMany(input);
      return createManyBeneficiary;
    }),
  createOneBeneficiary: publicProcedure
    .input(BeneficiaryCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneBeneficiary = await ctx.prisma.beneficiary.create(input);
      return createOneBeneficiary;
    }),
  deleteManyBeneficiary: publicProcedure
    .input(BeneficiaryDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyBeneficiary = await ctx.prisma.beneficiary.deleteMany(input);
      return deleteManyBeneficiary;
    }),
  deleteOneBeneficiary: publicProcedure
    .input(BeneficiaryDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneBeneficiary = await ctx.prisma.beneficiary.delete(input);
      return deleteOneBeneficiary;
    }),
  findFirstBeneficiary: publicProcedure
    .input(BeneficiaryFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstBeneficiary = await ctx.prisma.beneficiary.findFirst(input);
      return findFirstBeneficiary;
    }),
  findFirstBeneficiaryOrThrow: publicProcedure
    .input(BeneficiaryFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstBeneficiaryOrThrow = await ctx.prisma.beneficiary.findFirstOrThrow(input);
      return findFirstBeneficiaryOrThrow;
    }),
  findManyBeneficiary: publicProcedure
    .input(BeneficiaryFindManySchema).query(async ({ ctx, input }) => {
      const findManyBeneficiary = await ctx.prisma.beneficiary.findMany(input);
      return findManyBeneficiary;
    }),
  findUniqueBeneficiary: publicProcedure
    .input(BeneficiaryFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueBeneficiary = await ctx.prisma.beneficiary.findUnique(input);
      return findUniqueBeneficiary;
    }),
  findUniqueBeneficiaryOrThrow: publicProcedure
    .input(BeneficiaryFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueBeneficiaryOrThrow = await ctx.prisma.beneficiary.findUniqueOrThrow(input);
      return findUniqueBeneficiaryOrThrow;
    }),
  groupByBeneficiary: publicProcedure
    .input(BeneficiaryGroupBySchema).query(async ({ ctx, input }) => {
      const groupByBeneficiary = await ctx.prisma.beneficiary.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByBeneficiary;
    }),
  updateManyBeneficiary: publicProcedure
    .input(BeneficiaryUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyBeneficiary = await ctx.prisma.beneficiary.updateMany(input);
      return updateManyBeneficiary;
    }),
  updateOneBeneficiary: publicProcedure
    .input(BeneficiaryUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneBeneficiary = await ctx.prisma.beneficiary.update(input);
      return updateOneBeneficiary;
    }),
  upsertOneBeneficiary: publicProcedure
    .input(BeneficiaryUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneBeneficiary = await ctx.prisma.beneficiary.upsert(input);
      return upsertOneBeneficiary;
    }),

}) 
