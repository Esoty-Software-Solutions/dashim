import { t, publicProcedure } from "./helpers/createRouter";
import { IDCardAggregateSchema } from "../schemas/aggregateIDCard.schema";
import { IDCardCreateManySchema } from "../schemas/createManyIDCard.schema";
import { IDCardCreateOneSchema } from "../schemas/createOneIDCard.schema";
import { IDCardDeleteManySchema } from "../schemas/deleteManyIDCard.schema";
import { IDCardDeleteOneSchema } from "../schemas/deleteOneIDCard.schema";
import { IDCardFindFirstSchema } from "../schemas/findFirstIDCard.schema";
import { IDCardFindManySchema } from "../schemas/findManyIDCard.schema";
import { IDCardFindUniqueSchema } from "../schemas/findUniqueIDCard.schema";
import { IDCardGroupBySchema } from "../schemas/groupByIDCard.schema";
import { IDCardUpdateManySchema } from "../schemas/updateManyIDCard.schema";
import { IDCardUpdateOneSchema } from "../schemas/updateOneIDCard.schema";
import { IDCardUpsertSchema } from "../schemas/upsertOneIDCard.schema";

export const idcardsRouter = t.router({
  aggregateIDCard: publicProcedure
    .input(IDCardAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateIDCard = await ctx.prisma.iDCard.aggregate(input);
      return aggregateIDCard;
    }),
  createManyIDCard: publicProcedure
    .input(IDCardCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyIDCard = await ctx.prisma.iDCard.createMany(input);
      return createManyIDCard;
    }),
  createOneIDCard: publicProcedure
    .input(IDCardCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneIDCard = await ctx.prisma.iDCard.create(input);
      return createOneIDCard;
    }),
  deleteManyIDCard: publicProcedure
    .input(IDCardDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyIDCard = await ctx.prisma.iDCard.deleteMany(input);
      return deleteManyIDCard;
    }),
  deleteOneIDCard: publicProcedure
    .input(IDCardDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneIDCard = await ctx.prisma.iDCard.delete(input);
      return deleteOneIDCard;
    }),
  findFirstIDCard: publicProcedure
    .input(IDCardFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstIDCard = await ctx.prisma.iDCard.findFirst(input);
      return findFirstIDCard;
    }),
  findFirstIDCardOrThrow: publicProcedure
    .input(IDCardFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstIDCardOrThrow = await ctx.prisma.iDCard.findFirstOrThrow(input);
      return findFirstIDCardOrThrow;
    }),
  findManyIDCard: publicProcedure
    .input(IDCardFindManySchema).query(async ({ ctx, input }) => {
      const findManyIDCard = await ctx.prisma.iDCard.findMany(input);
      return findManyIDCard;
    }),
  findUniqueIDCard: publicProcedure
    .input(IDCardFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueIDCard = await ctx.prisma.iDCard.findUnique(input);
      return findUniqueIDCard;
    }),
  findUniqueIDCardOrThrow: publicProcedure
    .input(IDCardFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueIDCardOrThrow = await ctx.prisma.iDCard.findUniqueOrThrow(input);
      return findUniqueIDCardOrThrow;
    }),
  groupByIDCard: publicProcedure
    .input(IDCardGroupBySchema).query(async ({ ctx, input }) => {
      const groupByIDCard = await ctx.prisma.iDCard.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByIDCard;
    }),
  updateManyIDCard: publicProcedure
    .input(IDCardUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyIDCard = await ctx.prisma.iDCard.updateMany(input);
      return updateManyIDCard;
    }),
  updateOneIDCard: publicProcedure
    .input(IDCardUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneIDCard = await ctx.prisma.iDCard.update(input);
      return updateOneIDCard;
    }),
  upsertOneIDCard: publicProcedure
    .input(IDCardUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneIDCard = await ctx.prisma.iDCard.upsert(input);
      return upsertOneIDCard;
    }),

}) 
