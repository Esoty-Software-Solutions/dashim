import { t, publicProcedure } from "./helpers/createRouter";
import { FingerprintAggregateSchema } from "../schemas/aggregateFingerprint.schema";
import { FingerprintCreateManySchema } from "../schemas/createManyFingerprint.schema";
import { FingerprintCreateOneSchema } from "../schemas/createOneFingerprint.schema";
import { FingerprintDeleteManySchema } from "../schemas/deleteManyFingerprint.schema";
import { FingerprintDeleteOneSchema } from "../schemas/deleteOneFingerprint.schema";
import { FingerprintFindFirstSchema } from "../schemas/findFirstFingerprint.schema";
import { FingerprintFindManySchema } from "../schemas/findManyFingerprint.schema";
import { FingerprintFindUniqueSchema } from "../schemas/findUniqueFingerprint.schema";
import { FingerprintGroupBySchema } from "../schemas/groupByFingerprint.schema";
import { FingerprintUpdateManySchema } from "../schemas/updateManyFingerprint.schema";
import { FingerprintUpdateOneSchema } from "../schemas/updateOneFingerprint.schema";
import { FingerprintUpsertSchema } from "../schemas/upsertOneFingerprint.schema";

export const fingerprintsRouter = t.router({
  aggregateFingerprint: publicProcedure
    .input(FingerprintAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateFingerprint = await ctx.prisma.fingerprint.aggregate(input);
      return aggregateFingerprint;
    }),
  createManyFingerprint: publicProcedure
    .input(FingerprintCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyFingerprint = await ctx.prisma.fingerprint.createMany(input);
      return createManyFingerprint;
    }),
  createOneFingerprint: publicProcedure
    .input(FingerprintCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneFingerprint = await ctx.prisma.fingerprint.create(input);
      return createOneFingerprint;
    }),
  deleteManyFingerprint: publicProcedure
    .input(FingerprintDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyFingerprint = await ctx.prisma.fingerprint.deleteMany(input);
      return deleteManyFingerprint;
    }),
  deleteOneFingerprint: publicProcedure
    .input(FingerprintDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneFingerprint = await ctx.prisma.fingerprint.delete(input);
      return deleteOneFingerprint;
    }),
  findFirstFingerprint: publicProcedure
    .input(FingerprintFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstFingerprint = await ctx.prisma.fingerprint.findFirst(input);
      return findFirstFingerprint;
    }),
  findFirstFingerprintOrThrow: publicProcedure
    .input(FingerprintFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstFingerprintOrThrow = await ctx.prisma.fingerprint.findFirstOrThrow(input);
      return findFirstFingerprintOrThrow;
    }),
  findManyFingerprint: publicProcedure
    .input(FingerprintFindManySchema).query(async ({ ctx, input }) => {
      const findManyFingerprint = await ctx.prisma.fingerprint.findMany(input);
      return findManyFingerprint;
    }),
  findUniqueFingerprint: publicProcedure
    .input(FingerprintFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueFingerprint = await ctx.prisma.fingerprint.findUnique(input);
      return findUniqueFingerprint;
    }),
  findUniqueFingerprintOrThrow: publicProcedure
    .input(FingerprintFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueFingerprintOrThrow = await ctx.prisma.fingerprint.findUniqueOrThrow(input);
      return findUniqueFingerprintOrThrow;
    }),
  groupByFingerprint: publicProcedure
    .input(FingerprintGroupBySchema).query(async ({ ctx, input }) => {
      const groupByFingerprint = await ctx.prisma.fingerprint.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByFingerprint;
    }),
  updateManyFingerprint: publicProcedure
    .input(FingerprintUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyFingerprint = await ctx.prisma.fingerprint.updateMany(input);
      return updateManyFingerprint;
    }),
  updateOneFingerprint: publicProcedure
    .input(FingerprintUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneFingerprint = await ctx.prisma.fingerprint.update(input);
      return updateOneFingerprint;
    }),
  upsertOneFingerprint: publicProcedure
    .input(FingerprintUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneFingerprint = await ctx.prisma.fingerprint.upsert(input);
      return upsertOneFingerprint;
    }),

}) 
