import { t, publicProcedure } from "./helpers/createRouter";
import { BeneficiaryBalanceAggregateSchema } from "../schemas/aggregateBeneficiaryBalance.schema";
import { BeneficiaryBalanceCreateManySchema } from "../schemas/createManyBeneficiaryBalance.schema";
import { BeneficiaryBalanceCreateOneSchema } from "../schemas/createOneBeneficiaryBalance.schema";
import { BeneficiaryBalanceDeleteManySchema } from "../schemas/deleteManyBeneficiaryBalance.schema";
import { BeneficiaryBalanceDeleteOneSchema } from "../schemas/deleteOneBeneficiaryBalance.schema";
import { BeneficiaryBalanceFindFirstSchema } from "../schemas/findFirstBeneficiaryBalance.schema";
import { BeneficiaryBalanceFindManySchema } from "../schemas/findManyBeneficiaryBalance.schema";
import { BeneficiaryBalanceFindUniqueSchema } from "../schemas/findUniqueBeneficiaryBalance.schema";
import { BeneficiaryBalanceGroupBySchema } from "../schemas/groupByBeneficiaryBalance.schema";
import { BeneficiaryBalanceUpdateManySchema } from "../schemas/updateManyBeneficiaryBalance.schema";
import { BeneficiaryBalanceUpdateOneSchema } from "../schemas/updateOneBeneficiaryBalance.schema";
import { BeneficiaryBalanceUpsertSchema } from "../schemas/upsertOneBeneficiaryBalance.schema";

export const beneficiarybalancesRouter = t.router({
  aggregateBeneficiaryBalance: publicProcedure
    .input(BeneficiaryBalanceAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateBeneficiaryBalance = await ctx.prisma.beneficiaryBalance.aggregate(input);
      return aggregateBeneficiaryBalance;
    }),
  createManyBeneficiaryBalance: publicProcedure
    .input(BeneficiaryBalanceCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyBeneficiaryBalance = await ctx.prisma.beneficiaryBalance.createMany(input);
      return createManyBeneficiaryBalance;
    }),
  createOneBeneficiaryBalance: publicProcedure
    .input(BeneficiaryBalanceCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneBeneficiaryBalance = await ctx.prisma.beneficiaryBalance.create(input);
      return createOneBeneficiaryBalance;
    }),
  deleteManyBeneficiaryBalance: publicProcedure
    .input(BeneficiaryBalanceDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyBeneficiaryBalance = await ctx.prisma.beneficiaryBalance.deleteMany(input);
      return deleteManyBeneficiaryBalance;
    }),
  deleteOneBeneficiaryBalance: publicProcedure
    .input(BeneficiaryBalanceDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneBeneficiaryBalance = await ctx.prisma.beneficiaryBalance.delete(input);
      return deleteOneBeneficiaryBalance;
    }),
  findFirstBeneficiaryBalance: publicProcedure
    .input(BeneficiaryBalanceFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstBeneficiaryBalance = await ctx.prisma.beneficiaryBalance.findFirst(input);
      return findFirstBeneficiaryBalance;
    }),
  findFirstBeneficiaryBalanceOrThrow: publicProcedure
    .input(BeneficiaryBalanceFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstBeneficiaryBalanceOrThrow = await ctx.prisma.beneficiaryBalance.findFirstOrThrow(input);
      return findFirstBeneficiaryBalanceOrThrow;
    }),
  findManyBeneficiaryBalance: publicProcedure
    .input(BeneficiaryBalanceFindManySchema).query(async ({ ctx, input }) => {
      const findManyBeneficiaryBalance = await ctx.prisma.beneficiaryBalance.findMany(input);
      return findManyBeneficiaryBalance;
    }),
  findUniqueBeneficiaryBalance: publicProcedure
    .input(BeneficiaryBalanceFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueBeneficiaryBalance = await ctx.prisma.beneficiaryBalance.findUnique(input);
      return findUniqueBeneficiaryBalance;
    }),
  findUniqueBeneficiaryBalanceOrThrow: publicProcedure
    .input(BeneficiaryBalanceFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueBeneficiaryBalanceOrThrow = await ctx.prisma.beneficiaryBalance.findUniqueOrThrow(input);
      return findUniqueBeneficiaryBalanceOrThrow;
    }),
  groupByBeneficiaryBalance: publicProcedure
    .input(BeneficiaryBalanceGroupBySchema).query(async ({ ctx, input }) => {
      const groupByBeneficiaryBalance = await ctx.prisma.beneficiaryBalance.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByBeneficiaryBalance;
    }),
  updateManyBeneficiaryBalance: publicProcedure
    .input(BeneficiaryBalanceUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyBeneficiaryBalance = await ctx.prisma.beneficiaryBalance.updateMany(input);
      return updateManyBeneficiaryBalance;
    }),
  updateOneBeneficiaryBalance: publicProcedure
    .input(BeneficiaryBalanceUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneBeneficiaryBalance = await ctx.prisma.beneficiaryBalance.update(input);
      return updateOneBeneficiaryBalance;
    }),
  upsertOneBeneficiaryBalance: publicProcedure
    .input(BeneficiaryBalanceUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneBeneficiaryBalance = await ctx.prisma.beneficiaryBalance.upsert(input);
      return upsertOneBeneficiaryBalance;
    }),

}) 
