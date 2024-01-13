import { t, publicProcedure } from "./helpers/createRouter";
import { PackageMedicalServicesAggregateSchema } from "../schemas/aggregatePackageMedicalServices.schema";
import { PackageMedicalServicesCreateManySchema } from "../schemas/createManyPackageMedicalServices.schema";
import { PackageMedicalServicesCreateOneSchema } from "../schemas/createOnePackageMedicalServices.schema";
import { PackageMedicalServicesDeleteManySchema } from "../schemas/deleteManyPackageMedicalServices.schema";
import { PackageMedicalServicesDeleteOneSchema } from "../schemas/deleteOnePackageMedicalServices.schema";
import { PackageMedicalServicesFindFirstSchema } from "../schemas/findFirstPackageMedicalServices.schema";
import { PackageMedicalServicesFindManySchema } from "../schemas/findManyPackageMedicalServices.schema";
import { PackageMedicalServicesFindUniqueSchema } from "../schemas/findUniquePackageMedicalServices.schema";
import { PackageMedicalServicesGroupBySchema } from "../schemas/groupByPackageMedicalServices.schema";
import { PackageMedicalServicesUpdateManySchema } from "../schemas/updateManyPackageMedicalServices.schema";
import { PackageMedicalServicesUpdateOneSchema } from "../schemas/updateOnePackageMedicalServices.schema";
import { PackageMedicalServicesUpsertSchema } from "../schemas/upsertOnePackageMedicalServices.schema";

export const packagemedicalservicesRouter = t.router({
  aggregatePackageMedicalServices: publicProcedure
    .input(PackageMedicalServicesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePackageMedicalServices = await ctx.prisma.packageMedicalServices.aggregate(input);
      return aggregatePackageMedicalServices;
    }),
  createManyPackageMedicalServices: publicProcedure
    .input(PackageMedicalServicesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPackageMedicalServices = await ctx.prisma.packageMedicalServices.createMany(input);
      return createManyPackageMedicalServices;
    }),
  createOnePackageMedicalServices: publicProcedure
    .input(PackageMedicalServicesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePackageMedicalServices = await ctx.prisma.packageMedicalServices.create(input);
      return createOnePackageMedicalServices;
    }),
  deleteManyPackageMedicalServices: publicProcedure
    .input(PackageMedicalServicesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPackageMedicalServices = await ctx.prisma.packageMedicalServices.deleteMany(input);
      return deleteManyPackageMedicalServices;
    }),
  deleteOnePackageMedicalServices: publicProcedure
    .input(PackageMedicalServicesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePackageMedicalServices = await ctx.prisma.packageMedicalServices.delete(input);
      return deleteOnePackageMedicalServices;
    }),
  findFirstPackageMedicalServices: publicProcedure
    .input(PackageMedicalServicesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPackageMedicalServices = await ctx.prisma.packageMedicalServices.findFirst(input);
      return findFirstPackageMedicalServices;
    }),
  findFirstPackageMedicalServicesOrThrow: publicProcedure
    .input(PackageMedicalServicesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPackageMedicalServicesOrThrow = await ctx.prisma.packageMedicalServices.findFirstOrThrow(input);
      return findFirstPackageMedicalServicesOrThrow;
    }),
  findManyPackageMedicalServices: publicProcedure
    .input(PackageMedicalServicesFindManySchema).query(async ({ ctx, input }) => {
      const findManyPackageMedicalServices = await ctx.prisma.packageMedicalServices.findMany(input);
      return findManyPackageMedicalServices;
    }),
  findUniquePackageMedicalServices: publicProcedure
    .input(PackageMedicalServicesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePackageMedicalServices = await ctx.prisma.packageMedicalServices.findUnique(input);
      return findUniquePackageMedicalServices;
    }),
  findUniquePackageMedicalServicesOrThrow: publicProcedure
    .input(PackageMedicalServicesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePackageMedicalServicesOrThrow = await ctx.prisma.packageMedicalServices.findUniqueOrThrow(input);
      return findUniquePackageMedicalServicesOrThrow;
    }),
  groupByPackageMedicalServices: publicProcedure
    .input(PackageMedicalServicesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPackageMedicalServices = await ctx.prisma.packageMedicalServices.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPackageMedicalServices;
    }),
  updateManyPackageMedicalServices: publicProcedure
    .input(PackageMedicalServicesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPackageMedicalServices = await ctx.prisma.packageMedicalServices.updateMany(input);
      return updateManyPackageMedicalServices;
    }),
  updateOnePackageMedicalServices: publicProcedure
    .input(PackageMedicalServicesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePackageMedicalServices = await ctx.prisma.packageMedicalServices.update(input);
      return updateOnePackageMedicalServices;
    }),
  upsertOnePackageMedicalServices: publicProcedure
    .input(PackageMedicalServicesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePackageMedicalServices = await ctx.prisma.packageMedicalServices.upsert(input);
      return upsertOnePackageMedicalServices;
    }),

}) 
