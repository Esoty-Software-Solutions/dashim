import { t, publicProcedure } from "./helpers/createRouter";
import { VoiceAggregateSchema } from "../schemas/aggregateVoice.schema";
import { VoiceCreateManySchema } from "../schemas/createManyVoice.schema";
import { VoiceCreateOneSchema } from "../schemas/createOneVoice.schema";
import { VoiceDeleteManySchema } from "../schemas/deleteManyVoice.schema";
import { VoiceDeleteOneSchema } from "../schemas/deleteOneVoice.schema";
import { VoiceFindFirstSchema } from "../schemas/findFirstVoice.schema";
import { VoiceFindManySchema } from "../schemas/findManyVoice.schema";
import { VoiceFindUniqueSchema } from "../schemas/findUniqueVoice.schema";
import { VoiceGroupBySchema } from "../schemas/groupByVoice.schema";
import { VoiceUpdateManySchema } from "../schemas/updateManyVoice.schema";
import { VoiceUpdateOneSchema } from "../schemas/updateOneVoice.schema";
import { VoiceUpsertSchema } from "../schemas/upsertOneVoice.schema";

export const voicesRouter = t.router({
  aggregateVoice: publicProcedure
    .input(VoiceAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateVoice = await ctx.prisma.voice.aggregate(input);
      return aggregateVoice;
    }),
  createManyVoice: publicProcedure
    .input(VoiceCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyVoice = await ctx.prisma.voice.createMany(input);
      return createManyVoice;
    }),
  createOneVoice: publicProcedure
    .input(VoiceCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneVoice = await ctx.prisma.voice.create(input);
      return createOneVoice;
    }),
  deleteManyVoice: publicProcedure
    .input(VoiceDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyVoice = await ctx.prisma.voice.deleteMany(input);
      return deleteManyVoice;
    }),
  deleteOneVoice: publicProcedure
    .input(VoiceDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneVoice = await ctx.prisma.voice.delete(input);
      return deleteOneVoice;
    }),
  findFirstVoice: publicProcedure
    .input(VoiceFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVoice = await ctx.prisma.voice.findFirst(input);
      return findFirstVoice;
    }),
  findFirstVoiceOrThrow: publicProcedure
    .input(VoiceFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstVoiceOrThrow = await ctx.prisma.voice.findFirstOrThrow(input);
      return findFirstVoiceOrThrow;
    }),
  findManyVoice: publicProcedure
    .input(VoiceFindManySchema).query(async ({ ctx, input }) => {
      const findManyVoice = await ctx.prisma.voice.findMany(input);
      return findManyVoice;
    }),
  findUniqueVoice: publicProcedure
    .input(VoiceFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVoice = await ctx.prisma.voice.findUnique(input);
      return findUniqueVoice;
    }),
  findUniqueVoiceOrThrow: publicProcedure
    .input(VoiceFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueVoiceOrThrow = await ctx.prisma.voice.findUniqueOrThrow(input);
      return findUniqueVoiceOrThrow;
    }),
  groupByVoice: publicProcedure
    .input(VoiceGroupBySchema).query(async ({ ctx, input }) => {
      const groupByVoice = await ctx.prisma.voice.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByVoice;
    }),
  updateManyVoice: publicProcedure
    .input(VoiceUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyVoice = await ctx.prisma.voice.updateMany(input);
      return updateManyVoice;
    }),
  updateOneVoice: publicProcedure
    .input(VoiceUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneVoice = await ctx.prisma.voice.update(input);
      return updateOneVoice;
    }),
  upsertOneVoice: publicProcedure
    .input(VoiceUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneVoice = await ctx.prisma.voice.upsert(input);
      return upsertOneVoice;
    }),

}) 
