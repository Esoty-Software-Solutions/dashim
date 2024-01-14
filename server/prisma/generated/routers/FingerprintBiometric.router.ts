import { t, publicProcedure } from "./helpers/createRouter";
import { FingerprintBiometricAggregateSchema } from "../schemas/aggregateFingerprintBiometric.schema";
import { FingerprintBiometricCreateManySchema } from "../schemas/createManyFingerprintBiometric.schema";
import { FingerprintBiometricCreateOneSchema } from "../schemas/createOneFingerprintBiometric.schema";
import { FingerprintBiometricDeleteManySchema } from "../schemas/deleteManyFingerprintBiometric.schema";
import { FingerprintBiometricDeleteOneSchema } from "../schemas/deleteOneFingerprintBiometric.schema";
import { FingerprintBiometricFindFirstSchema } from "../schemas/findFirstFingerprintBiometric.schema";
import { FingerprintBiometricFindManySchema } from "../schemas/findManyFingerprintBiometric.schema";
import { FingerprintBiometricFindUniqueSchema } from "../schemas/findUniqueFingerprintBiometric.schema";
import { FingerprintBiometricGroupBySchema } from "../schemas/groupByFingerprintBiometric.schema";
import { FingerprintBiometricUpdateManySchema } from "../schemas/updateManyFingerprintBiometric.schema";
import { FingerprintBiometricUpdateOneSchema } from "../schemas/updateOneFingerprintBiometric.schema";
import { FingerprintBiometricUpsertSchema } from "../schemas/upsertOneFingerprintBiometric.schema";

export const fingerprintbiometricsRouter = t.router({
  aggregateFingerprintBiometric: publicProcedure
    .input(FingerprintBiometricAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateFingerprintBiometric = await ctx.prisma.fingerprintBiometric.aggregate(input);
      return aggregateFingerprintBiometric;
    }),
  createManyFingerprintBiometric: publicProcedure
    .input(FingerprintBiometricCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyFingerprintBiometric = await ctx.prisma.fingerprintBiometric.createMany(input);
      return createManyFingerprintBiometric;
    }),
  createOneFingerprintBiometric: publicProcedure
    .input(FingerprintBiometricCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneFingerprintBiometric = await ctx.prisma.fingerprintBiometric.create(input);
      return createOneFingerprintBiometric;
    }),
  deleteManyFingerprintBiometric: publicProcedure
    .input(FingerprintBiometricDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyFingerprintBiometric = await ctx.prisma.fingerprintBiometric.deleteMany(input);
      return deleteManyFingerprintBiometric;
    }),
  deleteOneFingerprintBiometric: publicProcedure
    .input(FingerprintBiometricDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneFingerprintBiometric = await ctx.prisma.fingerprintBiometric.delete(input);
      return deleteOneFingerprintBiometric;
    }),
  findFirstFingerprintBiometric: publicProcedure
    .input(FingerprintBiometricFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstFingerprintBiometric = await ctx.prisma.fingerprintBiometric.findFirst(input);
      return findFirstFingerprintBiometric;
    }),
  findFirstFingerprintBiometricOrThrow: publicProcedure
    .input(FingerprintBiometricFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstFingerprintBiometricOrThrow = await ctx.prisma.fingerprintBiometric.findFirstOrThrow(input);
      return findFirstFingerprintBiometricOrThrow;
    }),
  findManyFingerprintBiometric: publicProcedure
    .input(FingerprintBiometricFindManySchema).query(async ({ ctx, input }) => {
      const findManyFingerprintBiometric = await ctx.prisma.fingerprintBiometric.findMany(input);
      return findManyFingerprintBiometric;
    }),
  findUniqueFingerprintBiometric: publicProcedure
    .input(FingerprintBiometricFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueFingerprintBiometric = await ctx.prisma.fingerprintBiometric.findUnique(input);
      return findUniqueFingerprintBiometric;
    }),
  findUniqueFingerprintBiometricOrThrow: publicProcedure
    .input(FingerprintBiometricFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueFingerprintBiometricOrThrow = await ctx.prisma.fingerprintBiometric.findUniqueOrThrow(input);
      return findUniqueFingerprintBiometricOrThrow;
    }),
  groupByFingerprintBiometric: publicProcedure
    .input(FingerprintBiometricGroupBySchema).query(async ({ ctx, input }) => {
      const groupByFingerprintBiometric = await ctx.prisma.fingerprintBiometric.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByFingerprintBiometric;
    }),
  updateManyFingerprintBiometric: publicProcedure
    .input(FingerprintBiometricUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyFingerprintBiometric = await ctx.prisma.fingerprintBiometric.updateMany(input);
      return updateManyFingerprintBiometric;
    }),
  updateOneFingerprintBiometric: publicProcedure
    .input(FingerprintBiometricUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneFingerprintBiometric = await ctx.prisma.fingerprintBiometric.update(input);
      return updateOneFingerprintBiometric;
    }),
  upsertOneFingerprintBiometric: publicProcedure
    .input(FingerprintBiometricUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneFingerprintBiometric = await ctx.prisma.fingerprintBiometric.upsert(input);
      return upsertOneFingerprintBiometric;
    }),

}) 
