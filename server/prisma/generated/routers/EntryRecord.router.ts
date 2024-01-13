import { t, publicProcedure } from "./helpers/createRouter";
import { EntryRecordAggregateSchema } from "../schemas/aggregateEntryRecord.schema";
import { EntryRecordCreateManySchema } from "../schemas/createManyEntryRecord.schema";
import { EntryRecordCreateOneSchema } from "../schemas/createOneEntryRecord.schema";
import { EntryRecordDeleteManySchema } from "../schemas/deleteManyEntryRecord.schema";
import { EntryRecordDeleteOneSchema } from "../schemas/deleteOneEntryRecord.schema";
import { EntryRecordFindFirstSchema } from "../schemas/findFirstEntryRecord.schema";
import { EntryRecordFindManySchema } from "../schemas/findManyEntryRecord.schema";
import { EntryRecordFindUniqueSchema } from "../schemas/findUniqueEntryRecord.schema";
import { EntryRecordGroupBySchema } from "../schemas/groupByEntryRecord.schema";
import { EntryRecordUpdateManySchema } from "../schemas/updateManyEntryRecord.schema";
import { EntryRecordUpdateOneSchema } from "../schemas/updateOneEntryRecord.schema";
import { EntryRecordUpsertSchema } from "../schemas/upsertOneEntryRecord.schema";

export const entryrecordsRouter = t.router({
  aggregateEntryRecord: publicProcedure
    .input(EntryRecordAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateEntryRecord = await ctx.prisma.entryRecord.aggregate(input);
      return aggregateEntryRecord;
    }),
  createManyEntryRecord: publicProcedure
    .input(EntryRecordCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyEntryRecord = await ctx.prisma.entryRecord.createMany(input);
      return createManyEntryRecord;
    }),
  createOneEntryRecord: publicProcedure
    .input(EntryRecordCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneEntryRecord = await ctx.prisma.entryRecord.create(input);
      return createOneEntryRecord;
    }),
  deleteManyEntryRecord: publicProcedure
    .input(EntryRecordDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyEntryRecord = await ctx.prisma.entryRecord.deleteMany(input);
      return deleteManyEntryRecord;
    }),
  deleteOneEntryRecord: publicProcedure
    .input(EntryRecordDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneEntryRecord = await ctx.prisma.entryRecord.delete(input);
      return deleteOneEntryRecord;
    }),
  findFirstEntryRecord: publicProcedure
    .input(EntryRecordFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEntryRecord = await ctx.prisma.entryRecord.findFirst(input);
      return findFirstEntryRecord;
    }),
  findFirstEntryRecordOrThrow: publicProcedure
    .input(EntryRecordFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstEntryRecordOrThrow = await ctx.prisma.entryRecord.findFirstOrThrow(input);
      return findFirstEntryRecordOrThrow;
    }),
  findManyEntryRecord: publicProcedure
    .input(EntryRecordFindManySchema).query(async ({ ctx, input }) => {
      const findManyEntryRecord = await ctx.prisma.entryRecord.findMany(input);
      return findManyEntryRecord;
    }),
  findUniqueEntryRecord: publicProcedure
    .input(EntryRecordFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEntryRecord = await ctx.prisma.entryRecord.findUnique(input);
      return findUniqueEntryRecord;
    }),
  findUniqueEntryRecordOrThrow: publicProcedure
    .input(EntryRecordFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueEntryRecordOrThrow = await ctx.prisma.entryRecord.findUniqueOrThrow(input);
      return findUniqueEntryRecordOrThrow;
    }),
  groupByEntryRecord: publicProcedure
    .input(EntryRecordGroupBySchema).query(async ({ ctx, input }) => {
      const groupByEntryRecord = await ctx.prisma.entryRecord.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByEntryRecord;
    }),
  updateManyEntryRecord: publicProcedure
    .input(EntryRecordUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyEntryRecord = await ctx.prisma.entryRecord.updateMany(input);
      return updateManyEntryRecord;
    }),
  updateOneEntryRecord: publicProcedure
    .input(EntryRecordUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneEntryRecord = await ctx.prisma.entryRecord.update(input);
      return updateOneEntryRecord;
    }),
  upsertOneEntryRecord: publicProcedure
    .input(EntryRecordUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneEntryRecord = await ctx.prisma.entryRecord.upsert(input);
      return upsertOneEntryRecord;
    }),

}) 
