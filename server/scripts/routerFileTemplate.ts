import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import { z } from "zod";
import { User } from "../src/models/user";
import {
  UserAggregateSchema,
  UserCreateManySchema,
  UserCreateOneSchema,
  UserDeleteManySchema,
  UserDeleteOneSchema,
  UserFindFirstSchema,
  UserFindManySchema,
  UserFindUniqueSchema,
  UserGroupBySchema,
  UserUpdateManySchema,
  UserUpdateOneSchema,
  UserUpsertSchema,
  UserCountSchema,
} from "@schemas/UserRouter.schema";

export const userRouter = router({
  // aggregate: publicProcedure
  //   .input(UserAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.user.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(UserCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
  createOne: publicProcedure
    .input(UserCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
  deleteMany: publicProcedure
    .input(UserDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
  deleteOne: publicProcedure
    .input(UserDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
  findFirst: publicProcedure
    .input(UserFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
  findFirstOrThrow: publicProcedure
    .input(UserFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.findFirstOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
  findMany: publicProcedure
    .input(UserFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.findMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
  findUnique: publicProcedure
    .input(UserFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
  findUniqueOrThrow: publicProcedure
    .input(UserFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.user.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
  groupBy: publicProcedure
    .input(UserGroupBySchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.groupBy({
          where: input.where,
          orderBy: input.orderBy,
          by: input.by,
          having: input.having,
          take: input.take,
          skip: input.skip,
        });
      } catch (error) {
        throwCustomError(error);
      }
    }),
  updateMany: publicProcedure
    .input(UserUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.updateMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
  updateOne: publicProcedure
    .input(UserUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
  upsertOne: publicProcedure
    .input(UserUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.upsert(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
  count: publicProcedure
    .input(UserCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
