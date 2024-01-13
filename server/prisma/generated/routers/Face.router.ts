import { t, publicProcedure } from "./helpers/createRouter";
import { FaceAggregateSchema } from "../schemas/aggregateFace.schema";
import { FaceCreateManySchema } from "../schemas/createManyFace.schema";
import { FaceCreateOneSchema } from "../schemas/createOneFace.schema";
import { FaceDeleteManySchema } from "../schemas/deleteManyFace.schema";
import { FaceDeleteOneSchema } from "../schemas/deleteOneFace.schema";
import { FaceFindFirstSchema } from "../schemas/findFirstFace.schema";
import { FaceFindManySchema } from "../schemas/findManyFace.schema";
import { FaceFindUniqueSchema } from "../schemas/findUniqueFace.schema";
import { FaceGroupBySchema } from "../schemas/groupByFace.schema";
import { FaceUpdateManySchema } from "../schemas/updateManyFace.schema";
import { FaceUpdateOneSchema } from "../schemas/updateOneFace.schema";
import { FaceUpsertSchema } from "../schemas/upsertOneFace.schema";

export const facesRouter = t.router({
  aggregateFace: publicProcedure
    .input(FaceAggregateSchema).query(async ({ ctx, input }) => {
      const aggregateFace = await ctx.prisma.face.aggregate(input);
      return aggregateFace;
    }),
  createManyFace: publicProcedure
    .input(FaceCreateManySchema).mutation(async ({ ctx, input }) => {
      const createManyFace = await ctx.prisma.face.createMany(input);
      return createManyFace;
    }),
  createOneFace: publicProcedure
    .input(FaceCreateOneSchema).mutation(async ({ ctx, input }) => {
      const createOneFace = await ctx.prisma.face.create(input);
      return createOneFace;
    }),
  deleteManyFace: publicProcedure
    .input(FaceDeleteManySchema).mutation(async ({ ctx, input }) => {
      const deleteManyFace = await ctx.prisma.face.deleteMany(input);
      return deleteManyFace;
    }),
  deleteOneFace: publicProcedure
    .input(FaceDeleteOneSchema).mutation(async ({ ctx, input }) => {
      const deleteOneFace = await ctx.prisma.face.delete(input);
      return deleteOneFace;
    }),
  findFirstFace: publicProcedure
    .input(FaceFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstFace = await ctx.prisma.face.findFirst(input);
      return findFirstFace;
    }),
  findFirstFaceOrThrow: publicProcedure
    .input(FaceFindFirstSchema).query(async ({ ctx, input }) => {
      const findFirstFaceOrThrow = await ctx.prisma.face.findFirstOrThrow(input);
      return findFirstFaceOrThrow;
    }),
  findManyFace: publicProcedure
    .input(FaceFindManySchema).query(async ({ ctx, input }) => {
      const findManyFace = await ctx.prisma.face.findMany(input);
      return findManyFace;
    }),
  findUniqueFace: publicProcedure
    .input(FaceFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueFace = await ctx.prisma.face.findUnique(input);
      return findUniqueFace;
    }),
  findUniqueFaceOrThrow: publicProcedure
    .input(FaceFindUniqueSchema).query(async ({ ctx, input }) => {
      const findUniqueFaceOrThrow = await ctx.prisma.face.findUniqueOrThrow(input);
      return findUniqueFaceOrThrow;
    }),
  groupByFace: publicProcedure
    .input(FaceGroupBySchema).query(async ({ ctx, input }) => {
      const groupByFace = await ctx.prisma.face.groupBy({ where: input.where, orderBy: input.orderBy, by: input.by, having: input.having, take: input.take, skip: input.skip });
      return groupByFace;
    }),
  updateManyFace: publicProcedure
    .input(FaceUpdateManySchema).mutation(async ({ ctx, input }) => {
      const updateManyFace = await ctx.prisma.face.updateMany(input);
      return updateManyFace;
    }),
  updateOneFace: publicProcedure
    .input(FaceUpdateOneSchema).mutation(async ({ ctx, input }) => {
      const updateOneFace = await ctx.prisma.face.update(input);
      return updateOneFace;
    }),
  upsertOneFace: publicProcedure
    .input(FaceUpsertSchema).mutation(async ({ ctx, input }) => {
      const upsertOneFace = await ctx.prisma.face.upsert(input);
      return upsertOneFace;
    }),

}) 
