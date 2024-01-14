import { t, publicProcedure } from "./helpers/createRouter";
import { CitiesAggregateSchema } from "../schemas/aggregateCities.schema";
import { CitiesCreateManySchema } from "../schemas/createManyCities.schema";
import { CitiesCreateOneSchema } from "../schemas/createOneCities.schema";
import { CitiesDeleteManySchema } from "../schemas/deleteManyCities.schema";
import { CitiesDeleteOneSchema } from "../schemas/deleteOneCities.schema";
import { CitiesFindFirstSchema } from "../schemas/findFirstCities.schema";
import { CitiesFindManySchema } from "../schemas/findManyCities.schema";
import { CitiesFindUniqueSchema } from "../schemas/findUniqueCities.schema";
import { CitiesGroupBySchema } from "../schemas/groupByCities.schema";
import { CitiesUpdateManySchema } from "../schemas/updateManyCities.schema";
import { CitiesUpdateOneSchema } from "../schemas/updateOneCities.schema";
import { CitiesUpsertSchema } from "../schemas/upsertOneCities.schema";

export const citiesRouter = t.router({
  aggregateCities: publicProcedure
    .input(CitiesAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateCities = await ctx.prisma.cities.aggregate(input);
      return aggregateCities;
    }),
  createManyCities: publicProcedure
    .input(CitiesCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyCities = await ctx.prisma.cities.createMany(input);
      return createManyCities;
    }),
  createOneCities: publicProcedure
    .input(CitiesCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneCities = await ctx.prisma.cities.create(input);
      return createOneCities;
    }),
  deleteManyCities: publicProcedure
    .input(CitiesDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyCities = await ctx.prisma.cities.deleteMany(input);
      return deleteManyCities;
    }),
  deleteOneCities: publicProcedure
    .input(CitiesDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneCities = await ctx.prisma.cities.delete(input);
      return deleteOneCities;
    }),
  findFirstCities: publicProcedure
    .input(CitiesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstCities = await ctx.prisma.cities.findFirst(input);
      return findFirstCities;
    }),
  findFirstCitiesOrThrow: publicProcedure
    .input(CitiesFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstCitiesOrThrow = await ctx.prisma.cities.findFirstOrThrow(input);
      return findFirstCitiesOrThrow;
    }),
  findManyCities: publicProcedure
    .input(CitiesFindManySchema).query(async ({ ctx, input }) => {
      const findManyCities = await ctx.prisma.cities.findMany(input);
      return findManyCities;
    }),
  findUniqueCities: publicProcedure
    .input(CitiesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueCities = await ctx.prisma.cities.findUnique(input);
      return findUniqueCities;
    }),
  findUniqueCitiesOrThrow: publicProcedure
    .input(CitiesFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueCitiesOrThrow = await ctx.prisma.cities.findUniqueOrThrow(input);
      return findUniqueCitiesOrThrow;
    }),
  groupByCities: publicProcedure
    .input(CitiesGroupBySchema).query(async ({ ctx, input }) => {
      const groupByCities = await ctx.prisma.cities.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByCities;
    }),
  updateManyCities: publicProcedure
    .input(CitiesUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyCities = await ctx.prisma.cities.updateMany(input);
      return updateManyCities;
    }),
  updateOneCities: publicProcedure
    .input(CitiesUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneCities = await ctx.prisma.cities.update(input);
      return updateOneCities;
    }),
  upsertOneCities: publicProcedure
    .input(CitiesUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneCities = await ctx.prisma.cities.upsert(input);
      return upsertOneCities;
    }),

}) 
