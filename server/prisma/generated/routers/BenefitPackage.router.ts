import { t, publicProcedure } from "./helpers/createRouter";
import { BenefitPackageAggregateSchema } from "../schemas/aggregateBenefitPackage.schema";
import { BenefitPackageCreateManySchema } from "../schemas/createManyBenefitPackage.schema";
import { BenefitPackageCreateOneSchema } from "../schemas/createOneBenefitPackage.schema";
import { BenefitPackageDeleteManySchema } from "../schemas/deleteManyBenefitPackage.schema";
import { BenefitPackageDeleteOneSchema } from "../schemas/deleteOneBenefitPackage.schema";
import { BenefitPackageFindFirstSchema } from "../schemas/findFirstBenefitPackage.schema";
import { BenefitPackageFindManySchema } from "../schemas/findManyBenefitPackage.schema";
import { BenefitPackageFindUniqueSchema } from "../schemas/findUniqueBenefitPackage.schema";
import { BenefitPackageGroupBySchema } from "../schemas/groupByBenefitPackage.schema";
import { BenefitPackageUpdateManySchema } from "../schemas/updateManyBenefitPackage.schema";
import { BenefitPackageUpdateOneSchema } from "../schemas/updateOneBenefitPackage.schema";
import { BenefitPackageUpsertSchema } from "../schemas/upsertOneBenefitPackage.schema";

export const benefitpackagesRouter = t.router({
  aggregateBenefitPackage: publicProcedure
    .input(BenefitPackageAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateBenefitPackage = await ctx.prisma.benefitPackage.aggregate(input);
      return aggregateBenefitPackage;
    }),
  createManyBenefitPackage: publicProcedure
    .input(BenefitPackageCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyBenefitPackage = await ctx.prisma.benefitPackage.createMany(input);
      return createManyBenefitPackage;
    }),
  createOneBenefitPackage: publicProcedure
    .input(BenefitPackageCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneBenefitPackage = await ctx.prisma.benefitPackage.create(input);
      return createOneBenefitPackage;
    }),
  deleteManyBenefitPackage: publicProcedure
    .input(BenefitPackageDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyBenefitPackage = await ctx.prisma.benefitPackage.deleteMany(input);
      return deleteManyBenefitPackage;
    }),
  deleteOneBenefitPackage: publicProcedure
    .input(BenefitPackageDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneBenefitPackage = await ctx.prisma.benefitPackage.delete(input);
      return deleteOneBenefitPackage;
    }),
  findFirstBenefitPackage: publicProcedure
    .input(BenefitPackageFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstBenefitPackage = await ctx.prisma.benefitPackage.findFirst(input);
      return findFirstBenefitPackage;
    }),
  findFirstBenefitPackageOrThrow: publicProcedure
    .input(BenefitPackageFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstBenefitPackageOrThrow = await ctx.prisma.benefitPackage.findFirstOrThrow(input);
      return findFirstBenefitPackageOrThrow;
    }),
  findManyBenefitPackage: publicProcedure
    .input(BenefitPackageFindManySchema).query(async ({ ctx, input }) => {
      const findManyBenefitPackage = await ctx.prisma.benefitPackage.findMany(input);
      return findManyBenefitPackage;
    }),
  findUniqueBenefitPackage: publicProcedure
    .input(BenefitPackageFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueBenefitPackage = await ctx.prisma.benefitPackage.findUnique(input);
      return findUniqueBenefitPackage;
    }),
  findUniqueBenefitPackageOrThrow: publicProcedure
    .input(BenefitPackageFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueBenefitPackageOrThrow = await ctx.prisma.benefitPackage.findUniqueOrThrow(input);
      return findUniqueBenefitPackageOrThrow;
    }),
  groupByBenefitPackage: publicProcedure
    .input(BenefitPackageGroupBySchema).query(async ({ ctx, input }) => {
      const groupByBenefitPackage = await ctx.prisma.benefitPackage.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByBenefitPackage;
    }),
  updateManyBenefitPackage: publicProcedure
    .input(BenefitPackageUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyBenefitPackage = await ctx.prisma.benefitPackage.updateMany(input);
      return updateManyBenefitPackage;
    }),
  updateOneBenefitPackage: publicProcedure
    .input(BenefitPackageUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneBenefitPackage = await ctx.prisma.benefitPackage.update(input);
      return updateOneBenefitPackage;
    }),
  upsertOneBenefitPackage: publicProcedure
    .input(BenefitPackageUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneBenefitPackage = await ctx.prisma.benefitPackage.upsert(input);
      return upsertOneBenefitPackage;
    }),

}) 
