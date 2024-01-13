import { t, publicProcedure } from "./helpers/createRouter";
import { MedicalCenterServiceAggregateSchema } from "../schemas/aggregateMedicalCenterService.schema";
import { MedicalCenterServiceCreateManySchema } from "../schemas/createManyMedicalCenterService.schema";
import { MedicalCenterServiceCreateOneSchema } from "../schemas/createOneMedicalCenterService.schema";
import { MedicalCenterServiceDeleteManySchema } from "../schemas/deleteManyMedicalCenterService.schema";
import { MedicalCenterServiceDeleteOneSchema } from "../schemas/deleteOneMedicalCenterService.schema";
import { MedicalCenterServiceFindFirstSchema } from "../schemas/findFirstMedicalCenterService.schema";
import { MedicalCenterServiceFindManySchema } from "../schemas/findManyMedicalCenterService.schema";
import { MedicalCenterServiceFindUniqueSchema } from "../schemas/findUniqueMedicalCenterService.schema";
import { MedicalCenterServiceGroupBySchema } from "../schemas/groupByMedicalCenterService.schema";
import { MedicalCenterServiceUpdateManySchema } from "../schemas/updateManyMedicalCenterService.schema";
import { MedicalCenterServiceUpdateOneSchema } from "../schemas/updateOneMedicalCenterService.schema";
import { MedicalCenterServiceUpsertSchema } from "../schemas/upsertOneMedicalCenterService.schema";

export const medicalcenterservicesRouter = t.router({
  aggregateMedicalCenterService: publicProcedure
    .input(MedicalCenterServiceAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateMedicalCenterService = await ctx.prisma.medicalCenterService.aggregate(input);
      return aggregateMedicalCenterService;
    }),
  createManyMedicalCenterService: publicProcedure
    .input(MedicalCenterServiceCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyMedicalCenterService = await ctx.prisma.medicalCenterService.createMany(input);
      return createManyMedicalCenterService;
    }),
  createOneMedicalCenterService: publicProcedure
    .input(MedicalCenterServiceCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneMedicalCenterService = await ctx.prisma.medicalCenterService.create(input);
      return createOneMedicalCenterService;
    }),
  deleteManyMedicalCenterService: publicProcedure
    .input(MedicalCenterServiceDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyMedicalCenterService = await ctx.prisma.medicalCenterService.deleteMany(input);
      return deleteManyMedicalCenterService;
    }),
  deleteOneMedicalCenterService: publicProcedure
    .input(MedicalCenterServiceDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneMedicalCenterService = await ctx.prisma.medicalCenterService.delete(input);
      return deleteOneMedicalCenterService;
    }),
  findFirstMedicalCenterService: publicProcedure
    .input(MedicalCenterServiceFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstMedicalCenterService = await ctx.prisma.medicalCenterService.findFirst(input);
      return findFirstMedicalCenterService;
    }),
  findFirstMedicalCenterServiceOrThrow: publicProcedure
    .input(MedicalCenterServiceFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstMedicalCenterServiceOrThrow = await ctx.prisma.medicalCenterService.findFirstOrThrow(input);
      return findFirstMedicalCenterServiceOrThrow;
    }),
  findManyMedicalCenterService: publicProcedure
    .input(MedicalCenterServiceFindManySchema).query(async ({ ctx, input }) => {
      const findManyMedicalCenterService = await ctx.prisma.medicalCenterService.findMany(input);
      return findManyMedicalCenterService;
    }),
  findUniqueMedicalCenterService: publicProcedure
    .input(MedicalCenterServiceFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueMedicalCenterService = await ctx.prisma.medicalCenterService.findUnique(input);
      return findUniqueMedicalCenterService;
    }),
  findUniqueMedicalCenterServiceOrThrow: publicProcedure
    .input(MedicalCenterServiceFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueMedicalCenterServiceOrThrow = await ctx.prisma.medicalCenterService.findUniqueOrThrow(input);
      return findUniqueMedicalCenterServiceOrThrow;
    }),
  groupByMedicalCenterService: publicProcedure
    .input(MedicalCenterServiceGroupBySchema).query(async ({ ctx, input }) => {
      const groupByMedicalCenterService = await ctx.prisma.medicalCenterService.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByMedicalCenterService;
    }),
  updateManyMedicalCenterService: publicProcedure
    .input(MedicalCenterServiceUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyMedicalCenterService = await ctx.prisma.medicalCenterService.updateMany(input);
      return updateManyMedicalCenterService;
    }),
  updateOneMedicalCenterService: publicProcedure
    .input(MedicalCenterServiceUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneMedicalCenterService = await ctx.prisma.medicalCenterService.update(input);
      return updateOneMedicalCenterService;
    }),
  upsertOneMedicalCenterService: publicProcedure
    .input(MedicalCenterServiceUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneMedicalCenterService = await ctx.prisma.medicalCenterService.upsert(input);
      return upsertOneMedicalCenterService;
    }),

}) 
