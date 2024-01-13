import { t, publicProcedure } from "./helpers/createRouter";
import { TenantAggregateSchema } from "../schemas/aggregateTenant.schema";
import { TenantCreateManySchema } from "../schemas/createManyTenant.schema";
import { TenantCreateOneSchema } from "../schemas/createOneTenant.schema";
import { TenantDeleteManySchema } from "../schemas/deleteManyTenant.schema";
import { TenantDeleteOneSchema } from "../schemas/deleteOneTenant.schema";
import { TenantFindFirstSchema } from "../schemas/findFirstTenant.schema";
import { TenantFindManySchema } from "../schemas/findManyTenant.schema";
import { TenantFindUniqueSchema } from "../schemas/findUniqueTenant.schema";
import { TenantGroupBySchema } from "../schemas/groupByTenant.schema";
import { TenantUpdateManySchema } from "../schemas/updateManyTenant.schema";
import { TenantUpdateOneSchema } from "../schemas/updateOneTenant.schema";
import { TenantUpsertSchema } from "../schemas/upsertOneTenant.schema";

export const tenantsRouter = t.router({
  aggregateTenant: publicProcedure
    .input(TenantAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTenant = await ctx.prisma.tenant.aggregate(input);
      return aggregateTenant;
    }),
  createManyTenant: publicProcedure
    .input(TenantCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTenant = await ctx.prisma.tenant.createMany(input);
      return createManyTenant;
    }),
  createOneTenant: publicProcedure
    .input(TenantCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTenant = await ctx.prisma.tenant.create(input);
      return createOneTenant;
    }),
  deleteManyTenant: publicProcedure
    .input(TenantDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTenant = await ctx.prisma.tenant.deleteMany(input);
      return deleteManyTenant;
    }),
  deleteOneTenant: publicProcedure
    .input(TenantDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTenant = await ctx.prisma.tenant.delete(input);
      return deleteOneTenant;
    }),
  findFirstTenant: publicProcedure
    .input(TenantFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTenant = await ctx.prisma.tenant.findFirst(input);
      return findFirstTenant;
    }),
  findFirstTenantOrThrow: publicProcedure
    .input(TenantFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTenantOrThrow = await ctx.prisma.tenant.findFirstOrThrow(input);
      return findFirstTenantOrThrow;
    }),
  findManyTenant: publicProcedure
    .input(TenantFindManySchema).query(async ({ ctx, input }) => {
      const findManyTenant = await ctx.prisma.tenant.findMany(input);
      return findManyTenant;
    }),
  findUniqueTenant: publicProcedure
    .input(TenantFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTenant = await ctx.prisma.tenant.findUnique(input);
      return findUniqueTenant;
    }),
  findUniqueTenantOrThrow: publicProcedure
    .input(TenantFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTenantOrThrow = await ctx.prisma.tenant.findUniqueOrThrow(input);
      return findUniqueTenantOrThrow;
    }),
  groupByTenant: publicProcedure
    .input(TenantGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTenant = await ctx.prisma.tenant.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTenant;
    }),
  updateManyTenant: publicProcedure
    .input(TenantUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTenant = await ctx.prisma.tenant.updateMany(input);
      return updateManyTenant;
    }),
  updateOneTenant: publicProcedure
    .input(TenantUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTenant = await ctx.prisma.tenant.update(input);
      return updateOneTenant;
    }),
  upsertOneTenant: publicProcedure
    .input(TenantUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTenant = await ctx.prisma.tenant.upsert(input);
      return upsertOneTenant;
    }),

}) 
