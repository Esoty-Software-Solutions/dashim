import { t, publicProcedure } from "./helpers/createRouter";
import { TenantTypeAggregateSchema } from "../schemas/aggregateTenantType.schema";
import { TenantTypeCreateManySchema } from "../schemas/createManyTenantType.schema";
import { TenantTypeCreateOneSchema } from "../schemas/createOneTenantType.schema";
import { TenantTypeDeleteManySchema } from "../schemas/deleteManyTenantType.schema";
import { TenantTypeDeleteOneSchema } from "../schemas/deleteOneTenantType.schema";
import { TenantTypeFindFirstSchema } from "../schemas/findFirstTenantType.schema";
import { TenantTypeFindManySchema } from "../schemas/findManyTenantType.schema";
import { TenantTypeFindUniqueSchema } from "../schemas/findUniqueTenantType.schema";
import { TenantTypeGroupBySchema } from "../schemas/groupByTenantType.schema";
import { TenantTypeUpdateManySchema } from "../schemas/updateManyTenantType.schema";
import { TenantTypeUpdateOneSchema } from "../schemas/updateOneTenantType.schema";
import { TenantTypeUpsertSchema } from "../schemas/upsertOneTenantType.schema";

export const tenanttypesRouter = t.router({
  aggregateTenantType: publicProcedure
    .input(TenantTypeAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateTenantType = await ctx.prisma.tenantType.aggregate(input);
      return aggregateTenantType;
    }),
  createManyTenantType: publicProcedure
    .input(TenantTypeCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyTenantType = await ctx.prisma.tenantType.createMany(input);
      return createManyTenantType;
    }),
  createOneTenantType: publicProcedure
    .input(TenantTypeCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneTenantType = await ctx.prisma.tenantType.create(input);
      return createOneTenantType;
    }),
  deleteManyTenantType: publicProcedure
    .input(TenantTypeDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyTenantType = await ctx.prisma.tenantType.deleteMany(input);
      return deleteManyTenantType;
    }),
  deleteOneTenantType: publicProcedure
    .input(TenantTypeDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneTenantType = await ctx.prisma.tenantType.delete(input);
      return deleteOneTenantType;
    }),
  findFirstTenantType: publicProcedure
    .input(TenantTypeFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTenantType = await ctx.prisma.tenantType.findFirst(input);
      return findFirstTenantType;
    }),
  findFirstTenantTypeOrThrow: publicProcedure
    .input(TenantTypeFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstTenantTypeOrThrow = await ctx.prisma.tenantType.findFirstOrThrow(input);
      return findFirstTenantTypeOrThrow;
    }),
  findManyTenantType: publicProcedure
    .input(TenantTypeFindManySchema).query(async ({ ctx, input }) => {
      const findManyTenantType = await ctx.prisma.tenantType.findMany(input);
      return findManyTenantType;
    }),
  findUniqueTenantType: publicProcedure
    .input(TenantTypeFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTenantType = await ctx.prisma.tenantType.findUnique(input);
      return findUniqueTenantType;
    }),
  findUniqueTenantTypeOrThrow: publicProcedure
    .input(TenantTypeFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueTenantTypeOrThrow = await ctx.prisma.tenantType.findUniqueOrThrow(input);
      return findUniqueTenantTypeOrThrow;
    }),
  groupByTenantType: publicProcedure
    .input(TenantTypeGroupBySchema).query(async ({ ctx, input }) => {
      const groupByTenantType = await ctx.prisma.tenantType.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByTenantType;
    }),
  updateManyTenantType: publicProcedure
    .input(TenantTypeUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyTenantType = await ctx.prisma.tenantType.updateMany(input);
      return updateManyTenantType;
    }),
  updateOneTenantType: publicProcedure
    .input(TenantTypeUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneTenantType = await ctx.prisma.tenantType.update(input);
      return updateOneTenantType;
    }),
  upsertOneTenantType: publicProcedure
    .input(TenantTypeUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneTenantType = await ctx.prisma.tenantType.upsert(input);
      return upsertOneTenantType;
    }),

}) 
