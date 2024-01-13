import { t, publicProcedure } from "./helpers/createRouter";
import { RelationshipAggregateSchema } from "../schemas/aggregateRelationship.schema";
import { RelationshipCreateManySchema } from "../schemas/createManyRelationship.schema";
import { RelationshipCreateOneSchema } from "../schemas/createOneRelationship.schema";
import { RelationshipDeleteManySchema } from "../schemas/deleteManyRelationship.schema";
import { RelationshipDeleteOneSchema } from "../schemas/deleteOneRelationship.schema";
import { RelationshipFindFirstSchema } from "../schemas/findFirstRelationship.schema";
import { RelationshipFindManySchema } from "../schemas/findManyRelationship.schema";
import { RelationshipFindUniqueSchema } from "../schemas/findUniqueRelationship.schema";
import { RelationshipGroupBySchema } from "../schemas/groupByRelationship.schema";
import { RelationshipUpdateManySchema } from "../schemas/updateManyRelationship.schema";
import { RelationshipUpdateOneSchema } from "../schemas/updateOneRelationship.schema";
import { RelationshipUpsertSchema } from "../schemas/upsertOneRelationship.schema";

export const relationshipsRouter = t.router({
  aggregateRelationship: publicProcedure
    .input(RelationshipAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateRelationship = await ctx.prisma.relationship.aggregate(input);
      return aggregateRelationship;
    }),
  createManyRelationship: publicProcedure
    .input(RelationshipCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyRelationship = await ctx.prisma.relationship.createMany(input);
      return createManyRelationship;
    }),
  createOneRelationship: publicProcedure
    .input(RelationshipCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneRelationship = await ctx.prisma.relationship.create(input);
      return createOneRelationship;
    }),
  deleteManyRelationship: publicProcedure
    .input(RelationshipDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyRelationship = await ctx.prisma.relationship.deleteMany(input);
      return deleteManyRelationship;
    }),
  deleteOneRelationship: publicProcedure
    .input(RelationshipDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneRelationship = await ctx.prisma.relationship.delete(input);
      return deleteOneRelationship;
    }),
  findFirstRelationship: publicProcedure
    .input(RelationshipFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstRelationship = await ctx.prisma.relationship.findFirst(input);
      return findFirstRelationship;
    }),
  findFirstRelationshipOrThrow: publicProcedure
    .input(RelationshipFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstRelationshipOrThrow = await ctx.prisma.relationship.findFirstOrThrow(input);
      return findFirstRelationshipOrThrow;
    }),
  findManyRelationship: publicProcedure
    .input(RelationshipFindManySchema).query(async ({ ctx, input }) => {
      const findManyRelationship = await ctx.prisma.relationship.findMany(input);
      return findManyRelationship;
    }),
  findUniqueRelationship: publicProcedure
    .input(RelationshipFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueRelationship = await ctx.prisma.relationship.findUnique(input);
      return findUniqueRelationship;
    }),
  findUniqueRelationshipOrThrow: publicProcedure
    .input(RelationshipFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueRelationshipOrThrow = await ctx.prisma.relationship.findUniqueOrThrow(input);
      return findUniqueRelationshipOrThrow;
    }),
  groupByRelationship: publicProcedure
    .input(RelationshipGroupBySchema).query(async ({ ctx, input }) => {
      const groupByRelationship = await ctx.prisma.relationship.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByRelationship;
    }),
  updateManyRelationship: publicProcedure
    .input(RelationshipUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyRelationship = await ctx.prisma.relationship.updateMany(input);
      return updateManyRelationship;
    }),
  updateOneRelationship: publicProcedure
    .input(RelationshipUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneRelationship = await ctx.prisma.relationship.update(input);
      return updateOneRelationship;
    }),
  upsertOneRelationship: publicProcedure
    .input(RelationshipUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneRelationship = await ctx.prisma.relationship.upsert(input);
      return upsertOneRelationship;
    }),

}) 
