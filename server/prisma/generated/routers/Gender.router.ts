import { t, publicProcedure } from "./helpers/createRouter";
import { GenderAggregateSchema } from "../schemas/aggregateGender.schema";
import { GenderCreateManySchema } from "../schemas/createManyGender.schema";
import { GenderCreateOneSchema } from "../schemas/createOneGender.schema";
import { GenderDeleteManySchema } from "../schemas/deleteManyGender.schema";
import { GenderDeleteOneSchema } from "../schemas/deleteOneGender.schema";
import { GenderFindFirstSchema } from "../schemas/findFirstGender.schema";
import { GenderFindManySchema } from "../schemas/findManyGender.schema";
import { GenderFindUniqueSchema } from "../schemas/findUniqueGender.schema";
import { GenderGroupBySchema } from "../schemas/groupByGender.schema";
import { GenderUpdateManySchema } from "../schemas/updateManyGender.schema";
import { GenderUpdateOneSchema } from "../schemas/updateOneGender.schema";
import { GenderUpsertSchema } from "../schemas/upsertOneGender.schema";

export const gendersRouter = t.router({
  aggregateGender: publicProcedure
    .input(GenderAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateGender = await ctx.prisma.gender.aggregate(input);
      return aggregateGender;
    }),
  createManyGender: publicProcedure
    .input(GenderCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyGender = await ctx.prisma.gender.createMany(input);
      return createManyGender;
    }),
  createOneGender: publicProcedure
    .input(GenderCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneGender = await ctx.prisma.gender.create(input);
      return createOneGender;
    }),
  deleteManyGender: publicProcedure
    .input(GenderDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyGender = await ctx.prisma.gender.deleteMany(input);
      return deleteManyGender;
    }),
  deleteOneGender: publicProcedure
    .input(GenderDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneGender = await ctx.prisma.gender.delete(input);
      return deleteOneGender;
    }),
  findFirstGender: publicProcedure
    .input(GenderFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstGender = await ctx.prisma.gender.findFirst(input);
      return findFirstGender;
    }),
  findFirstGenderOrThrow: publicProcedure
    .input(GenderFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstGenderOrThrow = await ctx.prisma.gender.findFirstOrThrow(input);
      return findFirstGenderOrThrow;
    }),
  findManyGender: publicProcedure
    .input(GenderFindManySchema).query(async ({ ctx, input }) => {
      const findManyGender = await ctx.prisma.gender.findMany(input);
      return findManyGender;
    }),
  findUniqueGender: publicProcedure
    .input(GenderFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueGender = await ctx.prisma.gender.findUnique(input);
      return findUniqueGender;
    }),
  findUniqueGenderOrThrow: publicProcedure
    .input(GenderFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueGenderOrThrow = await ctx.prisma.gender.findUniqueOrThrow(input);
      return findUniqueGenderOrThrow;
    }),
  groupByGender: publicProcedure
    .input(GenderGroupBySchema).query(async ({ ctx, input }) => {
      const groupByGender = await ctx.prisma.gender.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByGender;
    }),
  updateManyGender: publicProcedure
    .input(GenderUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyGender = await ctx.prisma.gender.updateMany(input);
      return updateManyGender;
    }),
  updateOneGender: publicProcedure
    .input(GenderUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneGender = await ctx.prisma.gender.update(input);
      return updateOneGender;
    }),
  upsertOneGender: publicProcedure
    .input(GenderUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneGender = await ctx.prisma.gender.upsert(input);
      return upsertOneGender;
    }),

}) 
