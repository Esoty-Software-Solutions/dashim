import { t, publicProcedure } from "./helpers/createRouter";
import { DeviceTokenAggregateSchema } from "../schemas/aggregateDeviceToken.schema";
import { DeviceTokenCreateManySchema } from "../schemas/createManyDeviceToken.schema";
import { DeviceTokenCreateOneSchema } from "../schemas/createOneDeviceToken.schema";
import { DeviceTokenDeleteManySchema } from "../schemas/deleteManyDeviceToken.schema";
import { DeviceTokenDeleteOneSchema } from "../schemas/deleteOneDeviceToken.schema";
import { DeviceTokenFindFirstSchema } from "../schemas/findFirstDeviceToken.schema";
import { DeviceTokenFindManySchema } from "../schemas/findManyDeviceToken.schema";
import { DeviceTokenFindUniqueSchema } from "../schemas/findUniqueDeviceToken.schema";
import { DeviceTokenGroupBySchema } from "../schemas/groupByDeviceToken.schema";
import { DeviceTokenUpdateManySchema } from "../schemas/updateManyDeviceToken.schema";
import { DeviceTokenUpdateOneSchema } from "../schemas/updateOneDeviceToken.schema";
import { DeviceTokenUpsertSchema } from "../schemas/upsertOneDeviceToken.schema";

export const devicetokensRouter = t.router({
  aggregateDeviceToken: publicProcedure
    .input(DeviceTokenAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateDeviceToken = await ctx.prisma.deviceToken.aggregate(input);
      return aggregateDeviceToken;
    }),
  createManyDeviceToken: publicProcedure
    .input(DeviceTokenCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyDeviceToken = await ctx.prisma.deviceToken.createMany(input);
      return createManyDeviceToken;
    }),
  createOneDeviceToken: publicProcedure
    .input(DeviceTokenCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneDeviceToken = await ctx.prisma.deviceToken.create(input);
      return createOneDeviceToken;
    }),
  deleteManyDeviceToken: publicProcedure
    .input(DeviceTokenDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyDeviceToken = await ctx.prisma.deviceToken.deleteMany(input);
      return deleteManyDeviceToken;
    }),
  deleteOneDeviceToken: publicProcedure
    .input(DeviceTokenDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneDeviceToken = await ctx.prisma.deviceToken.delete(input);
      return deleteOneDeviceToken;
    }),
  findFirstDeviceToken: publicProcedure
    .input(DeviceTokenFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDeviceToken = await ctx.prisma.deviceToken.findFirst(input);
      return findFirstDeviceToken;
    }),
  findFirstDeviceTokenOrThrow: publicProcedure
    .input(DeviceTokenFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstDeviceTokenOrThrow = await ctx.prisma.deviceToken.findFirstOrThrow(input);
      return findFirstDeviceTokenOrThrow;
    }),
  findManyDeviceToken: publicProcedure
    .input(DeviceTokenFindManySchema).query(async ({ ctx, input }) => {
      const findManyDeviceToken = await ctx.prisma.deviceToken.findMany(input);
      return findManyDeviceToken;
    }),
  findUniqueDeviceToken: publicProcedure
    .input(DeviceTokenFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDeviceToken = await ctx.prisma.deviceToken.findUnique(input);
      return findUniqueDeviceToken;
    }),
  findUniqueDeviceTokenOrThrow: publicProcedure
    .input(DeviceTokenFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueDeviceTokenOrThrow = await ctx.prisma.deviceToken.findUniqueOrThrow(input);
      return findUniqueDeviceTokenOrThrow;
    }),
  groupByDeviceToken: publicProcedure
    .input(DeviceTokenGroupBySchema).query(async ({ ctx, input }) => {
      const groupByDeviceToken = await ctx.prisma.deviceToken.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByDeviceToken;
    }),
  updateManyDeviceToken: publicProcedure
    .input(DeviceTokenUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyDeviceToken = await ctx.prisma.deviceToken.updateMany(input);
      return updateManyDeviceToken;
    }),
  updateOneDeviceToken: publicProcedure
    .input(DeviceTokenUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneDeviceToken = await ctx.prisma.deviceToken.update(input);
      return updateOneDeviceToken;
    }),
  upsertOneDeviceToken: publicProcedure
    .input(DeviceTokenUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneDeviceToken = await ctx.prisma.deviceToken.upsert(input);
      return upsertOneDeviceToken;
    }),

}) 
