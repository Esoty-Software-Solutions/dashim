import { t, publicProcedure } from "./helpers/createRouter";
import { RoleAggregateSchema } from "../schemas/aggregateRole.schema";
import { RoleCreateManySchema } from "../schemas/createManyRole.schema";
import { RoleCreateOneSchema } from "../schemas/createOneRole.schema";
import { RoleDeleteManySchema } from "../schemas/deleteManyRole.schema";
import { RoleDeleteOneSchema } from "../schemas/deleteOneRole.schema";
import { RoleFindFirstSchema } from "../schemas/findFirstRole.schema";
import { RoleFindManySchema } from "../schemas/findManyRole.schema";
import { RoleFindUniqueSchema } from "../schemas/findUniqueRole.schema";
import { RoleGroupBySchema } from "../schemas/groupByRole.schema";
import { RoleUpdateManySchema } from "../schemas/updateManyRole.schema";
import { RoleUpdateOneSchema } from "../schemas/updateOneRole.schema";
import { RoleUpsertSchema } from "../schemas/upsertOneRole.schema";

export const rolesRouter = t.router({
  aggregateRole: publicProcedure
    .input(RoleAggregateSchema)
    .query(async ({ ctx, input }) => {
      const aggregateRole = await ctx.prisma.role.aggregate(input);
      return aggregateRole;
    }),
  createManyRole: publicProcedure
    .input(RoleCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      const createManyRole = await ctx.prisma.role.createMany(input);
      return createManyRole;
    }),
  createOneRole: publicProcedure
    .input(RoleCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const createOneRole = await ctx.prisma.role.create(input);
      return createOneRole;
    }),
  deleteManyRole: publicProcedure
    .input(RoleDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyRole = await ctx.prisma.role.deleteMany(input);
      return deleteManyRole;
    }),
  deleteOneRole: publicProcedure
    .input(RoleDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneRole = await ctx.prisma.role.delete(input);
      return deleteOneRole;
    }),
  findFirstRole: publicProcedure
    .input(RoleFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstRole = await ctx.prisma.role.findFirst(input);
      return findFirstRole;
    }),
  findFirstRoleOrThrow: publicProcedure
    .input(RoleFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstRoleOrThrow =
        await ctx.prisma.role.findFirstOrThrow(input);
      return findFirstRoleOrThrow;
    }),
  findManyRole: publicProcedure
    .input(RoleFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyRole = await ctx.prisma.role.findMany(input);
      return findManyRole;
    }),
  findUniqueRole: publicProcedure
    .input(RoleFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueRole = await ctx.prisma.role.findUnique(input);
      return findUniqueRole;
    }),
  findUniqueRoleOrThrow: publicProcedure
    .input(RoleFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueRoleOrThrow =
        await ctx.prisma.role.findUniqueOrThrow(input);
      return findUniqueRoleOrThrow;
    }),
  groupByRole: publicProcedure
    .input(RoleGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByRole = await ctx.prisma.role.groupBy({
        where: input.where,
        orderBy: input.orderBy,
        by: input.by,
        having: input.having,
        take: input.take,
        skip: input.skip,
      });
      return groupByRole;
    }),
  updateManyRole: publicProcedure
    .input(RoleUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyRole = await ctx.prisma.role.updateMany(input);
      return updateManyRole;
    }),
  updateOneRole: publicProcedure
    .input(RoleUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneRole = await ctx.prisma.role.update(input);
      return updateOneRole;
    }),
  upsertOneRole: publicProcedure
    .input(RoleUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneRole = await ctx.prisma.role.upsert(input);
      return upsertOneRole;
    }),
});
