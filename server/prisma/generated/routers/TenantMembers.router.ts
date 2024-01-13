import { t, publicProcedure } from "./helpers/createRouter";
import { TenantMembersAggregateSchema } from "../schemas/aggregateTenantMembers.schema";
import { TenantMembersCreateManySchema } from "../schemas/createManyTenantMembers.schema";
import { TenantMembersCreateOneSchema } from "../schemas/createOneTenantMembers.schema";
import { TenantMembersDeleteManySchema } from "../schemas/deleteManyTenantMembers.schema";
import { TenantMembersDeleteOneSchema } from "../schemas/deleteOneTenantMembers.schema";
import { TenantMembersFindFirstSchema } from "../schemas/findFirstTenantMembers.schema";
import { TenantMembersFindManySchema } from "../schemas/findManyTenantMembers.schema";
import { TenantMembersFindUniqueSchema } from "../schemas/findUniqueTenantMembers.schema";
import { TenantMembersGroupBySchema } from "../schemas/groupByTenantMembers.schema";
import { TenantMembersUpdateManySchema } from "../schemas/updateManyTenantMembers.schema";
import { TenantMembersUpdateOneSchema } from "../schemas/updateOneTenantMembers.schema";
import { TenantMembersUpsertSchema } from "../schemas/upsertOneTenantMembers.schema";

export const tenantmembersRouter = t.router({
  aggregateTenantMembers: publicProcedure
    .input(TenantMembersAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTenantMembers = await ctx.prisma.tenantMembers.aggregate(input);
      return aggregateTenantMembers;
    }),
  createManyTenantMembers: publicProcedure
    .input(TenantMembersCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTenantMembers = await ctx.prisma.tenantMembers.createMany(input);
      return createManyTenantMembers;
    }),
  createOneTenantMembers: publicProcedure
    .input(TenantMembersCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTenantMembers = await ctx.prisma.tenantMembers.create(input);
      return createOneTenantMembers;
    }),
  deleteManyTenantMembers: publicProcedure
    .input(TenantMembersDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTenantMembers = await ctx.prisma.tenantMembers.deleteMany(input);
      return deleteManyTenantMembers;
    }),
  deleteOneTenantMembers: publicProcedure
    .input(TenantMembersDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTenantMembers = await ctx.prisma.tenantMembers.delete(input);
      return deleteOneTenantMembers;
    }),
  findFirstTenantMembers: publicProcedure
    .input(TenantMembersFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTenantMembers = await ctx.prisma.tenantMembers.findFirst(input);
      return findFirstTenantMembers;
    }),
  findFirstTenantMembersOrThrow: publicProcedure
    .input(TenantMembersFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTenantMembersOrThrow = await ctx.prisma.tenantMembers.findFirstOrThrow(input);
      return findFirstTenantMembersOrThrow;
    }),
  findManyTenantMembers: publicProcedure
    .input(TenantMembersFindManySchema).query(async ({ ctx, input }) => {
      const findManyTenantMembers = await ctx.prisma.tenantMembers.findMany(input);
      return findManyTenantMembers;
    }),
  findUniqueTenantMembers: publicProcedure
    .input(TenantMembersFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTenantMembers = await ctx.prisma.tenantMembers.findUnique(input);
      return findUniqueTenantMembers;
    }),
  findUniqueTenantMembersOrThrow: publicProcedure
    .input(TenantMembersFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTenantMembersOrThrow = await ctx.prisma.tenantMembers.findUniqueOrThrow(input);
      return findUniqueTenantMembersOrThrow;
    }),
  groupByTenantMembers: publicProcedure
    .input(TenantMembersGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTenantMembers = await ctx.prisma.tenantMembers.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTenantMembers;
    }),
  updateManyTenantMembers: publicProcedure
    .input(TenantMembersUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTenantMembers = await ctx.prisma.tenantMembers.updateMany(input);
      return updateManyTenantMembers;
    }),
  updateOneTenantMembers: publicProcedure
    .input(TenantMembersUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTenantMembers = await ctx.prisma.tenantMembers.update(input);
      return updateOneTenantMembers;
    }),
  upsertOneTenantMembers: publicProcedure
    .input(TenantMembersUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTenantMembers = await ctx.prisma.tenantMembers.upsert(input);
      return upsertOneTenantMembers;
    }),

}) 
