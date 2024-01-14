import { t, publicProcedure } from "./helpers/createRouter";
import { CityAggregateSchema } from "../schemas/aggregateCity.schema";
import { CityCreateManySchema } from "../schemas/createManyCity.schema";
import { CityCreateOneSchema } from "../schemas/createOneCity.schema";
import { CityDeleteManySchema } from "../schemas/deleteManyCity.schema";
import { CityDeleteOneSchema } from "../schemas/deleteOneCity.schema";
import { CityFindFirstSchema } from "../schemas/findFirstCity.schema";
import { CityFindManySchema } from "../schemas/findManyCity.schema";
import { CityFindUniqueSchema } from "../schemas/findUniqueCity.schema";
import { CityGroupBySchema } from "../schemas/groupByCity.schema";
import { CityUpdateManySchema } from "../schemas/updateManyCity.schema";
import { CityUpdateOneSchema } from "../schemas/updateOneCity.schema";
import { CityUpsertSchema } from "../schemas/upsertOneCity.schema";

export const citiesRouter = t.router({
  aggregateCity: publicProcedure
    .input(CityAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateCity = await ctx.prisma.city.aggregate(input);
      return aggregateCity;
    }),
  createManyCity: publicProcedure
    .input(CityCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyCity = await ctx.prisma.city.createMany(input);
      return createManyCity;
    }),
  createOneCity: publicProcedure
    .input(CityCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneCity = await ctx.prisma.city.create(input);
      return createOneCity;
    }),
  deleteManyCity: publicProcedure
    .input(CityDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyCity = await ctx.prisma.city.deleteMany(input);
      return deleteManyCity;
    }),
  deleteOneCity: publicProcedure
    .input(CityDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneCity = await ctx.prisma.city.delete(input);
      return deleteOneCity;
    }),
  findFirstCity: publicProcedure
    .input(CityFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstCity = await ctx.prisma.city.findFirst(input);
      return findFirstCity;
    }),
  findFirstCityOrThrow: publicProcedure
    .input(CityFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstCityOrThrow = await ctx.prisma.city.findFirstOrThrow(input);
      return findFirstCityOrThrow;
    }),
  findManyCity: publicProcedure
    .input(CityFindManySchema).query(async ({ ctx, input }) => {
      const findManyCity = await ctx.prisma.city.findMany(input);
      return findManyCity;
    }),
  findUniqueCity: publicProcedure
    .input(CityFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueCity = await ctx.prisma.city.findUnique(input);
      return findUniqueCity;
    }),
  findUniqueCityOrThrow: publicProcedure
    .input(CityFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueCityOrThrow = await ctx.prisma.city.findUniqueOrThrow(input);
      return findUniqueCityOrThrow;
    }),
  groupByCity: publicProcedure
    .input(CityGroupBySchema).query(async ({ ctx, input }) => {
      const groupByCity = await ctx.prisma.city.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByCity;
    }),
  updateManyCity: publicProcedure
    .input(CityUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyCity = await ctx.prisma.city.updateMany(input);
      return updateManyCity;
    }),
  updateOneCity: publicProcedure
    .input(CityUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneCity = await ctx.prisma.city.update(input);
      return updateOneCity;
    }),
  upsertOneCity: publicProcedure
    .input(CityUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneCity = await ctx.prisma.city.upsert(input);
      return upsertOneCity;
    }),

}) 
