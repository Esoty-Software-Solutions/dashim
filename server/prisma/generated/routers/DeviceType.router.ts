import { t, publicProcedure } from "./helpers/createRouter";
import { DeviceTypeAggregateSchema } from "../schemas/aggregateDeviceType.schema";
import { DeviceTypeCreateManySchema } from "../schemas/createManyDeviceType.schema";
import { DeviceTypeCreateOneSchema } from "../schemas/createOneDeviceType.schema";
import { DeviceTypeDeleteManySchema } from "../schemas/deleteManyDeviceType.schema";
import { DeviceTypeDeleteOneSchema } from "../schemas/deleteOneDeviceType.schema";
import { DeviceTypeFindFirstSchema } from "../schemas/findFirstDeviceType.schema";
import { DeviceTypeFindManySchema } from "../schemas/findManyDeviceType.schema";
import { DeviceTypeFindUniqueSchema } from "../schemas/findUniqueDeviceType.schema";
import { DeviceTypeGroupBySchema } from "../schemas/groupByDeviceType.schema";
import { DeviceTypeUpdateManySchema } from "../schemas/updateManyDeviceType.schema";
import { DeviceTypeUpdateOneSchema } from "../schemas/updateOneDeviceType.schema";
import { DeviceTypeUpsertSchema } from "../schemas/upsertOneDeviceType.schema";

export const devicetypesRouter = t.router({
  aggregateDeviceType: publicProcedure
    .input(DeviceTypeAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateDeviceType = await ctx.prisma.deviceType.aggregate(input);
      return aggregateDeviceType;
    }),
  createManyDeviceType: publicProcedure
    .input(DeviceTypeCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyDeviceType = await ctx.prisma.deviceType.createMany(input);
      return createManyDeviceType;
    }),
  createOneDeviceType: publicProcedure
    .input(DeviceTypeCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneDeviceType = await ctx.prisma.deviceType.create(input);
      return createOneDeviceType;
    }),
  deleteManyDeviceType: publicProcedure
    .input(DeviceTypeDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyDeviceType = await ctx.prisma.deviceType.deleteMany(input);
      return deleteManyDeviceType;
    }),
  deleteOneDeviceType: publicProcedure
    .input(DeviceTypeDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneDeviceType = await ctx.prisma.deviceType.delete(input);
      return deleteOneDeviceType;
    }),
  findFirstDeviceType: publicProcedure
    .input(DeviceTypeFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDeviceType = await ctx.prisma.deviceType.findFirst(input);
      return findFirstDeviceType;
    }),
  findFirstDeviceTypeOrThrow: publicProcedure
    .input(DeviceTypeFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDeviceTypeOrThrow = await ctx.prisma.deviceType.findFirstOrThrow(input);
      return findFirstDeviceTypeOrThrow;
    }),
  findManyDeviceType: publicProcedure
    .input(DeviceTypeFindManySchema).query(async ({ ctx, input }) => {
      const findManyDeviceType = await ctx.prisma.deviceType.findMany(input);
      return findManyDeviceType;
    }),
  findUniqueDeviceType: publicProcedure
    .input(DeviceTypeFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDeviceType = await ctx.prisma.deviceType.findUnique(input);
      return findUniqueDeviceType;
    }),
  findUniqueDeviceTypeOrThrow: publicProcedure
    .input(DeviceTypeFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDeviceTypeOrThrow = await ctx.prisma.deviceType.findUniqueOrThrow(input);
      return findUniqueDeviceTypeOrThrow;
    }),
  groupByDeviceType: publicProcedure
    .input(DeviceTypeGroupBySchema).query(async ({ ctx, input }) => {
      const groupByDeviceType = await ctx.prisma.deviceType.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDeviceType;
    }),
  updateManyDeviceType: publicProcedure
    .input(DeviceTypeUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyDeviceType = await ctx.prisma.deviceType.updateMany(input);
      return updateManyDeviceType;
    }),
  updateOneDeviceType: publicProcedure
    .input(DeviceTypeUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneDeviceType = await ctx.prisma.deviceType.update(input);
      return updateOneDeviceType;
    }),
  upsertOneDeviceType: publicProcedure
    .input(DeviceTypeUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneDeviceType = await ctx.prisma.deviceType.upsert(input);
      return upsertOneDeviceType;
    }),

}) 
