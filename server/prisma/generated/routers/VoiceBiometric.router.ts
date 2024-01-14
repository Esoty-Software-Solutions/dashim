import { t, publicProcedure } from "./helpers/createRouter";
import { VoiceBiometricAggregateSchema } from "../schemas/aggregateVoiceBiometric.schema";
import { VoiceBiometricCreateManySchema } from "../schemas/createManyVoiceBiometric.schema";
import { VoiceBiometricCreateOneSchema } from "../schemas/createOneVoiceBiometric.schema";
import { VoiceBiometricDeleteManySchema } from "../schemas/deleteManyVoiceBiometric.schema";
import { VoiceBiometricDeleteOneSchema } from "../schemas/deleteOneVoiceBiometric.schema";
import { VoiceBiometricFindFirstSchema } from "../schemas/findFirstVoiceBiometric.schema";
import { VoiceBiometricFindManySchema } from "../schemas/findManyVoiceBiometric.schema";
import { VoiceBiometricFindUniqueSchema } from "../schemas/findUniqueVoiceBiometric.schema";
import { VoiceBiometricGroupBySchema } from "../schemas/groupByVoiceBiometric.schema";
import { VoiceBiometricUpdateManySchema } from "../schemas/updateManyVoiceBiometric.schema";
import { VoiceBiometricUpdateOneSchema } from "../schemas/updateOneVoiceBiometric.schema";
import { VoiceBiometricUpsertSchema } from "../schemas/upsertOneVoiceBiometric.schema";

export const voicebiometricsRouter = t.router({
  aggregateVoiceBiometric: publicProcedure
    .input(VoiceBiometricAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateVoiceBiometric = await ctx.prisma.voiceBiometric.aggregate(input);
      return aggregateVoiceBiometric;
    }),
  createManyVoiceBiometric: publicProcedure
    .input(VoiceBiometricCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyVoiceBiometric = await ctx.prisma.voiceBiometric.createMany(input);
      return createManyVoiceBiometric;
    }),
  createOneVoiceBiometric: publicProcedure
    .input(VoiceBiometricCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneVoiceBiometric = await ctx.prisma.voiceBiometric.create(input);
      return createOneVoiceBiometric;
    }),
  deleteManyVoiceBiometric: publicProcedure
    .input(VoiceBiometricDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyVoiceBiometric = await ctx.prisma.voiceBiometric.deleteMany(input);
      return deleteManyVoiceBiometric;
    }),
  deleteOneVoiceBiometric: publicProcedure
    .input(VoiceBiometricDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneVoiceBiometric = await ctx.prisma.voiceBiometric.delete(input);
      return deleteOneVoiceBiometric;
    }),
  findFirstVoiceBiometric: publicProcedure
    .input(VoiceBiometricFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVoiceBiometric = await ctx.prisma.voiceBiometric.findFirst(input);
      return findFirstVoiceBiometric;
    }),
  findFirstVoiceBiometricOrThrow: publicProcedure
    .input(VoiceBiometricFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVoiceBiometricOrThrow = await ctx.prisma.voiceBiometric.findFirstOrThrow(input);
      return findFirstVoiceBiometricOrThrow;
    }),
  findManyVoiceBiometric: publicProcedure
    .input(VoiceBiometricFindManySchema).query(async ({ ctx, input }) => {
      const findManyVoiceBiometric = await ctx.prisma.voiceBiometric.findMany(input);
      return findManyVoiceBiometric;
    }),
  findUniqueVoiceBiometric: publicProcedure
    .input(VoiceBiometricFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVoiceBiometric = await ctx.prisma.voiceBiometric.findUnique(input);
      return findUniqueVoiceBiometric;
    }),
  findUniqueVoiceBiometricOrThrow: publicProcedure
    .input(VoiceBiometricFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVoiceBiometricOrThrow = await ctx.prisma.voiceBiometric.findUniqueOrThrow(input);
      return findUniqueVoiceBiometricOrThrow;
    }),
  groupByVoiceBiometric: publicProcedure
    .input(VoiceBiometricGroupBySchema).query(async ({ ctx, input }) => {
      const groupByVoiceBiometric = await ctx.prisma.voiceBiometric.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVoiceBiometric;
    }),
  updateManyVoiceBiometric: publicProcedure
    .input(VoiceBiometricUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyVoiceBiometric = await ctx.prisma.voiceBiometric.updateMany(input);
      return updateManyVoiceBiometric;
    }),
  updateOneVoiceBiometric: publicProcedure
    .input(VoiceBiometricUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneVoiceBiometric = await ctx.prisma.voiceBiometric.update(input);
      return updateOneVoiceBiometric;
    }),
  upsertOneVoiceBiometric: publicProcedure
    .input(VoiceBiometricUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneVoiceBiometric = await ctx.prisma.voiceBiometric.upsert(input);
      return upsertOneVoiceBiometric;
    }),

}) 
