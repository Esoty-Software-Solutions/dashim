import { t, publicProcedure } from "./helpers/createRouter";
import { CurrencyAggregateSchema } from "../schemas/aggregateCurrency.schema";
import { CurrencyCreateManySchema } from "../schemas/createManyCurrency.schema";
import { CurrencyCreateOneSchema } from "../schemas/createOneCurrency.schema";
import { CurrencyDeleteManySchema } from "../schemas/deleteManyCurrency.schema";
import { CurrencyDeleteOneSchema } from "../schemas/deleteOneCurrency.schema";
import { CurrencyFindFirstSchema } from "../schemas/findFirstCurrency.schema";
import { CurrencyFindManySchema } from "../schemas/findManyCurrency.schema";
import { CurrencyFindUniqueSchema } from "../schemas/findUniqueCurrency.schema";
import { CurrencyGroupBySchema } from "../schemas/groupByCurrency.schema";
import { CurrencyUpdateManySchema } from "../schemas/updateManyCurrency.schema";
import { CurrencyUpdateOneSchema } from "../schemas/updateOneCurrency.schema";
import { CurrencyUpsertSchema } from "../schemas/upsertOneCurrency.schema";

export const currenciesRouter = t.router({
  aggregateCurrency: publicProcedure
    .input(CurrencyAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateCurrency = await ctx.prisma.currency.aggregate(input);
      return aggregateCurrency;
    }),
  createManyCurrency: publicProcedure
    .input(CurrencyCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyCurrency = await ctx.prisma.currency.createMany(input);
      return createManyCurrency;
    }),
  createOneCurrency: publicProcedure
    .input(CurrencyCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneCurrency = await ctx.prisma.currency.create(input);
      return createOneCurrency;
    }),
  deleteManyCurrency: publicProcedure
    .input(CurrencyDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyCurrency = await ctx.prisma.currency.deleteMany(input);
      return deleteManyCurrency;
    }),
  deleteOneCurrency: publicProcedure
    .input(CurrencyDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneCurrency = await ctx.prisma.currency.delete(input);
      return deleteOneCurrency;
    }),
  findFirstCurrency: publicProcedure
    .input(CurrencyFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstCurrency = await ctx.prisma.currency.findFirst(input);
      return findFirstCurrency;
    }),
  findFirstCurrencyOrThrow: publicProcedure
    .input(CurrencyFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstCurrencyOrThrow = await ctx.prisma.currency.findFirstOrThrow(input);
      return findFirstCurrencyOrThrow;
    }),
  findManyCurrency: publicProcedure
    .input(CurrencyFindManySchema).query(async ({ ctx, input }) => {
      const findManyCurrency = await ctx.prisma.currency.findMany(input);
      return findManyCurrency;
    }),
  findUniqueCurrency: publicProcedure
    .input(CurrencyFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueCurrency = await ctx.prisma.currency.findUnique(input);
      return findUniqueCurrency;
    }),
  findUniqueCurrencyOrThrow: publicProcedure
    .input(CurrencyFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueCurrencyOrThrow = await ctx.prisma.currency.findUniqueOrThrow(input);
      return findUniqueCurrencyOrThrow;
    }),
  groupByCurrency: publicProcedure
    .input(CurrencyGroupBySchema).query(async ({ ctx, input }) => {
      const groupByCurrency = await ctx.prisma.currency.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByCurrency;
    }),
  updateManyCurrency: publicProcedure
    .input(CurrencyUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyCurrency = await ctx.prisma.currency.updateMany(input);
      return updateManyCurrency;
    }),
  updateOneCurrency: publicProcedure
    .input(CurrencyUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneCurrency = await ctx.prisma.currency.update(input);
      return updateOneCurrency;
    }),
  upsertOneCurrency: publicProcedure
    .input(CurrencyUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneCurrency = await ctx.prisma.currency.upsert(input);
      return upsertOneCurrency;
    }),

}) 
