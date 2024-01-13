import { t, publicProcedure } from "./helpers/createRouter";
import { PatientExaminationAggregateSchema } from "../schemas/aggregatePatientExamination.schema";
import { PatientExaminationCreateManySchema } from "../schemas/createManyPatientExamination.schema";
import { PatientExaminationCreateOneSchema } from "../schemas/createOnePatientExamination.schema";
import { PatientExaminationDeleteManySchema } from "../schemas/deleteManyPatientExamination.schema";
import { PatientExaminationDeleteOneSchema } from "../schemas/deleteOnePatientExamination.schema";
import { PatientExaminationFindFirstSchema } from "../schemas/findFirstPatientExamination.schema";
import { PatientExaminationFindManySchema } from "../schemas/findManyPatientExamination.schema";
import { PatientExaminationFindUniqueSchema } from "../schemas/findUniquePatientExamination.schema";
import { PatientExaminationGroupBySchema } from "../schemas/groupByPatientExamination.schema";
import { PatientExaminationUpdateManySchema } from "../schemas/updateManyPatientExamination.schema";
import { PatientExaminationUpdateOneSchema } from "../schemas/updateOnePatientExamination.schema";
import { PatientExaminationUpsertSchema } from "../schemas/upsertOnePatientExamination.schema";

export const patientexaminationsRouter = t.router({
  aggregatePatientExamination: publicProcedure
    .input(PatientExaminationAggregateSchema).query(async ({ ctx, input }) => {
      const aggregatePatientExamination = await ctx.prisma.patientExamination.aggregate(input);
      return aggregatePatientExamination;
    }),
  createManyPatientExamination: publicProcedure
    .input(PatientExaminationCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyPatientExamination = await ctx.prisma.patientExamination.createMany(input);
      return createManyPatientExamination;
    }),
  createOnePatientExamination: publicProcedure
    .input(PatientExaminationCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOnePatientExamination = await ctx.prisma.patientExamination.create(input);
      return createOnePatientExamination;
    }),
  deleteManyPatientExamination: publicProcedure
    .input(PatientExaminationDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyPatientExamination = await ctx.prisma.patientExamination.deleteMany(input);
      return deleteManyPatientExamination;
    }),
  deleteOnePatientExamination: publicProcedure
    .input(PatientExaminationDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOnePatientExamination = await ctx.prisma.patientExamination.delete(input);
      return deleteOnePatientExamination;
    }),
  findFirstPatientExamination: publicProcedure
    .input(PatientExaminationFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPatientExamination = await ctx.prisma.patientExamination.findFirst(input);
      return findFirstPatientExamination;
    }),
  findFirstPatientExaminationOrThrow: publicProcedure
    .input(PatientExaminationFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstPatientExaminationOrThrow = await ctx.prisma.patientExamination.findFirstOrThrow(input);
      return findFirstPatientExaminationOrThrow;
    }),
  findManyPatientExamination: publicProcedure
    .input(PatientExaminationFindManySchema).query(async ({ ctx, input }) => {
      const findManyPatientExamination = await ctx.prisma.patientExamination.findMany(input);
      return findManyPatientExamination;
    }),
  findUniquePatientExamination: publicProcedure
    .input(PatientExaminationFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePatientExamination = await ctx.prisma.patientExamination.findUnique(input);
      return findUniquePatientExamination;
    }),
  findUniquePatientExaminationOrThrow: publicProcedure
    .input(PatientExaminationFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniquePatientExaminationOrThrow = await ctx.prisma.patientExamination.findUniqueOrThrow(input);
      return findUniquePatientExaminationOrThrow;
    }),
  groupByPatientExamination: publicProcedure
    .input(PatientExaminationGroupBySchema).query(async ({ ctx, input }) => {
      const groupByPatientExamination = await ctx.prisma.patientExamination.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByPatientExamination;
    }),
  updateManyPatientExamination: publicProcedure
    .input(PatientExaminationUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyPatientExamination = await ctx.prisma.patientExamination.updateMany(input);
      return updateManyPatientExamination;
    }),
  updateOnePatientExamination: publicProcedure
    .input(PatientExaminationUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOnePatientExamination = await ctx.prisma.patientExamination.update(input);
      return updateOnePatientExamination;
    }),
  upsertOnePatientExamination: publicProcedure
    .input(PatientExaminationUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOnePatientExamination = await ctx.prisma.patientExamination.upsert(input);
      return upsertOnePatientExamination;
    }),

}) 
