import { t, publicProcedure } from "./helpers/createRouter";
import { InstitutionAggregateSchema } from "../schemas/aggregateInstitution.schema";
import { InstitutionCreateManySchema } from "../schemas/createManyInstitution.schema";
import { InstitutionCreateOneSchema } from "../schemas/createOneInstitution.schema";
import { InstitutionDeleteManySchema } from "../schemas/deleteManyInstitution.schema";
import { InstitutionDeleteOneSchema } from "../schemas/deleteOneInstitution.schema";
import { InstitutionFindFirstSchema } from "../schemas/findFirstInstitution.schema";
import { InstitutionFindManySchema } from "../schemas/findManyInstitution.schema";
import { InstitutionFindUniqueSchema } from "../schemas/findUniqueInstitution.schema";
import { InstitutionGroupBySchema } from "../schemas/groupByInstitution.schema";
import { InstitutionUpdateManySchema } from "../schemas/updateManyInstitution.schema";
import { InstitutionUpdateOneSchema } from "../schemas/updateOneInstitution.schema";
import { InstitutionUpsertSchema } from "../schemas/upsertOneInstitution.schema";

export const institutionsRouter = t.router({
  aggregateInstitution: publicProcedure
    .input(InstitutionAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateInstitution = await ctx.prisma.institution.aggregate(input);
      return aggregateInstitution;
    }),
  createManyInstitution: publicProcedure
    .input(InstitutionCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyInstitution = await ctx.prisma.institution.createMany(input);
      return createManyInstitution;
    }),
  createOneInstitution: publicProcedure
    .input(InstitutionCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneInstitution = await ctx.prisma.institution.create(input);
      return createOneInstitution;
    }),
  deleteManyInstitution: publicProcedure
    .input(InstitutionDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyInstitution = await ctx.prisma.institution.deleteMany(input);
      return deleteManyInstitution;
    }),
  deleteOneInstitution: publicProcedure
    .input(InstitutionDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneInstitution = await ctx.prisma.institution.delete(input);
      return deleteOneInstitution;
    }),
  findFirstInstitution: publicProcedure
    .input(InstitutionFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstInstitution = await ctx.prisma.institution.findFirst(input);
      return findFirstInstitution;
    }),
  findFirstInstitutionOrThrow: publicProcedure
    .input(InstitutionFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstInstitutionOrThrow = await ctx.prisma.institution.findFirstOrThrow(input);
      return findFirstInstitutionOrThrow;
    }),
  findManyInstitution: publicProcedure
    .input(InstitutionFindManySchema).query(async ({ ctx, input }) => {
      const findManyInstitution = await ctx.prisma.institution.findMany(input);
      return findManyInstitution;
    }),
  findUniqueInstitution: publicProcedure
    .input(InstitutionFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueInstitution = await ctx.prisma.institution.findUnique(input);
      return findUniqueInstitution;
    }),
  findUniqueInstitutionOrThrow: publicProcedure
    .input(InstitutionFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueInstitutionOrThrow = await ctx.prisma.institution.findUniqueOrThrow(input);
      return findUniqueInstitutionOrThrow;
    }),
  groupByInstitution: publicProcedure
    .input(InstitutionGroupBySchema).query(async ({ ctx, input }) => {
      const groupByInstitution = await ctx.prisma.institution.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByInstitution;
    }),
  updateManyInstitution: publicProcedure
    .input(InstitutionUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyInstitution = await ctx.prisma.institution.updateMany(input);
      return updateManyInstitution;
    }),
  updateOneInstitution: publicProcedure
    .input(InstitutionUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneInstitution = await ctx.prisma.institution.update(input);
      return updateOneInstitution;
    }),
  upsertOneInstitution: publicProcedure
    .input(InstitutionUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneInstitution = await ctx.prisma.institution.upsert(input);
      return upsertOneInstitution;
    }),

}) 
