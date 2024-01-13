import { t, publicProcedure } from "./helpers/createRouter";
import { PatientServiceAggregateSchema } from "../schemas/aggregatePatientService.schema";
import { PatientServiceCreateManySchema } from "../schemas/createManyPatientService.schema";
import { PatientServiceCreateOneSchema } from "../schemas/createOnePatientService.schema";
import { PatientServiceDeleteManySchema } from "../schemas/deleteManyPatientService.schema";
import { PatientServiceDeleteOneSchema } from "../schemas/deleteOnePatientService.schema";
import { PatientServiceFindFirstSchema } from "../schemas/findFirstPatientService.schema";
import { PatientServiceFindManySchema } from "../schemas/findManyPatientService.schema";
import { PatientServiceFindUniqueSchema } from "../schemas/findUniquePatientService.schema";
import { PatientServiceGroupBySchema } from "../schemas/groupByPatientService.schema";
import { PatientServiceUpdateManySchema } from "../schemas/updateManyPatientService.schema";
import { PatientServiceUpdateOneSchema } from "../schemas/updateOnePatientService.schema";
import { PatientServiceUpsertSchema } from "../schemas/upsertOnePatientService.schema";

export const patientservicesRouter = t.router({
  aggregatePatientService: publicProcedure
    .input(PatientServiceAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePatientService = await ctx.prisma.patientService.aggregate(input);
      return aggregatePatientService;
    }),
  createManyPatientService: publicProcedure
    .input(PatientServiceCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPatientService = await ctx.prisma.patientService.createMany(input);
      return createManyPatientService;
    }),
  createOnePatientService: publicProcedure
    .input(PatientServiceCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePatientService = await ctx.prisma.patientService.create(input);
      return createOnePatientService;
    }),
  deleteManyPatientService: publicProcedure
    .input(PatientServiceDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPatientService = await ctx.prisma.patientService.deleteMany(input);
      return deleteManyPatientService;
    }),
  deleteOnePatientService: publicProcedure
    .input(PatientServiceDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePatientService = await ctx.prisma.patientService.delete(input);
      return deleteOnePatientService;
    }),
  findFirstPatientService: publicProcedure
    .input(PatientServiceFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPatientService = await ctx.prisma.patientService.findFirst(input);
      return findFirstPatientService;
    }),
  findFirstPatientServiceOrThrow: publicProcedure
    .input(PatientServiceFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPatientServiceOrThrow = await ctx.prisma.patientService.findFirstOrThrow(input);
      return findFirstPatientServiceOrThrow;
    }),
  findManyPatientService: publicProcedure
    .input(PatientServiceFindManySchema).query(async ({ ctx, input }) => {
      const findManyPatientService = await ctx.prisma.patientService.findMany(input);
      return findManyPatientService;
    }),
  findUniquePatientService: publicProcedure
    .input(PatientServiceFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePatientService = await ctx.prisma.patientService.findUnique(input);
      return findUniquePatientService;
    }),
  findUniquePatientServiceOrThrow: publicProcedure
    .input(PatientServiceFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePatientServiceOrThrow = await ctx.prisma.patientService.findUniqueOrThrow(input);
      return findUniquePatientServiceOrThrow;
    }),
  groupByPatientService: publicProcedure
    .input(PatientServiceGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPatientService = await ctx.prisma.patientService.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPatientService;
    }),
  updateManyPatientService: publicProcedure
    .input(PatientServiceUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPatientService = await ctx.prisma.patientService.updateMany(input);
      return updateManyPatientService;
    }),
  updateOnePatientService: publicProcedure
    .input(PatientServiceUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePatientService = await ctx.prisma.patientService.update(input);
      return updateOnePatientService;
    }),
  upsertOnePatientService: publicProcedure
    .input(PatientServiceUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePatientService = await ctx.prisma.patientService.upsert(input);
      return upsertOnePatientService;
    }),

}) 
