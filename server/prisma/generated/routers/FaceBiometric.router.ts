import { t, publicProcedure } from "./helpers/createRouter";
import { FaceBiometricAggregateSchema } from "../schemas/aggregateFaceBiometric.schema";
import { FaceBiometricCreateManySchema } from "../schemas/createManyFaceBiometric.schema";
import { FaceBiometricCreateOneSchema } from "../schemas/createOneFaceBiometric.schema";
import { FaceBiometricDeleteManySchema } from "../schemas/deleteManyFaceBiometric.schema";
import { FaceBiometricDeleteOneSchema } from "../schemas/deleteOneFaceBiometric.schema";
import { FaceBiometricFindFirstSchema } from "../schemas/findFirstFaceBiometric.schema";
import { FaceBiometricFindManySchema } from "../schemas/findManyFaceBiometric.schema";
import { FaceBiometricFindUniqueSchema } from "../schemas/findUniqueFaceBiometric.schema";
import { FaceBiometricGroupBySchema } from "../schemas/groupByFaceBiometric.schema";
import { FaceBiometricUpdateManySchema } from "../schemas/updateManyFaceBiometric.schema";
import { FaceBiometricUpdateOneSchema } from "../schemas/updateOneFaceBiometric.schema";
import { FaceBiometricUpsertSchema } from "../schemas/upsertOneFaceBiometric.schema";

export const facebiometricsRouter = t.router({
  aggregateFaceBiometric: publicProcedure
    .input(FaceBiometricAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateFaceBiometric = await ctx.prisma.faceBiometric.aggregate(input);
      return aggregateFaceBiometric;
    }),
  createManyFaceBiometric: publicProcedure
    .input(FaceBiometricCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyFaceBiometric = await ctx.prisma.faceBiometric.createMany(input);
      return createManyFaceBiometric;
    }),
  createOneFaceBiometric: publicProcedure
    .input(FaceBiometricCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneFaceBiometric = await ctx.prisma.faceBiometric.create(input);
      return createOneFaceBiometric;
    }),
  deleteManyFaceBiometric: publicProcedure
    .input(FaceBiometricDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyFaceBiometric = await ctx.prisma.faceBiometric.deleteMany(input);
      return deleteManyFaceBiometric;
    }),
  deleteOneFaceBiometric: publicProcedure
    .input(FaceBiometricDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneFaceBiometric = await ctx.prisma.faceBiometric.delete(input);
      return deleteOneFaceBiometric;
    }),
  findFirstFaceBiometric: publicProcedure
    .input(FaceBiometricFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstFaceBiometric = await ctx.prisma.faceBiometric.findFirst(input);
      return findFirstFaceBiometric;
    }),
  findFirstFaceBiometricOrThrow: publicProcedure
    .input(FaceBiometricFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstFaceBiometricOrThrow = await ctx.prisma.faceBiometric.findFirstOrThrow(input);
      return findFirstFaceBiometricOrThrow;
    }),
  findManyFaceBiometric: publicProcedure
    .input(FaceBiometricFindManySchema).query(async ({ ctx, input }) => {
      const findManyFaceBiometric = await ctx.prisma.faceBiometric.findMany(input);
      return findManyFaceBiometric;
    }),
  findUniqueFaceBiometric: publicProcedure
    .input(FaceBiometricFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueFaceBiometric = await ctx.prisma.faceBiometric.findUnique(input);
      return findUniqueFaceBiometric;
    }),
  findUniqueFaceBiometricOrThrow: publicProcedure
    .input(FaceBiometricFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueFaceBiometricOrThrow = await ctx.prisma.faceBiometric.findUniqueOrThrow(input);
      return findUniqueFaceBiometricOrThrow;
    }),
  groupByFaceBiometric: publicProcedure
    .input(FaceBiometricGroupBySchema).query(async ({ ctx, input }) => {
      const groupByFaceBiometric = await ctx.prisma.faceBiometric.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByFaceBiometric;
    }),
  updateManyFaceBiometric: publicProcedure
    .input(FaceBiometricUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyFaceBiometric = await ctx.prisma.faceBiometric.updateMany(input);
      return updateManyFaceBiometric;
    }),
  updateOneFaceBiometric: publicProcedure
    .input(FaceBiometricUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneFaceBiometric = await ctx.prisma.faceBiometric.update(input);
      return updateOneFaceBiometric;
    }),
  upsertOneFaceBiometric: publicProcedure
    .input(FaceBiometricUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneFaceBiometric = await ctx.prisma.faceBiometric.upsert(input);
      return upsertOneFaceBiometric;
    }),

}) 
