import { router, publicProcedure } from "./_trpc";
import { UserAggregateSchema } from '../../prisma/generated/schemas/aggregateUser.schema' //"../schemas/aggregateUser.schema";
import { UserCreateManySchema } from "../../prisma/generated/schemas/createManyUser.schema";
import { UserCreateOneSchema } from "../../prisma/generated/schemas/createOneUser.schema";
import { UserDeleteManySchema } from "../schemas/deleteManyUser.schema";
import { UserDeleteOneSchema } from "../schemas/deleteOneUser.schema";
import { UserFindFirstSchema } from "../schemas/findFirstUser.schema";
import { UserFindManySchema } from "../schemas/findManyUser.schema";
import { UserFindUniqueSchema } from "../schemas/findUniqueUser.schema";
import { UserGroupBySchema } from "../schemas/groupByUser.schema";
import { UserUpdateManySchema } from "../schemas/updateManyUser.schema";
import { UserUpdateOneSchema } from "../schemas/updateOneUser.schema";
import { UserUpsertSchema } from "../schemas/upsertOneUser.schema";
import { Gender } from "../../../src/models/gender";
import { z } from 'zod';
import { UserCreateInputObjectSchema, UserUncheckedCreateInputObjectSchema } from 'prisma/generated/schemas';


export const UserCreateOneSchema1 = z.object({
  data: z.intersection(
    UserUncheckedCreateInputObjectSchema,
    UserCreateInputObjectSchema,
  ),
});

export const UserCreateOneSchema4 = z.object({
  data: z.intersection(
    UserCreateInputObjectSchema,
    UserUncheckedCreateInputObjectSchema,
    
  ),
});

export const UserCreateOneSchema3 = z.object({
  data: z.union([UserUncheckedCreateInputObjectSchema,
    UserCreateInputObjectSchema,]
    
  ),
});

const UserCreateOneSchema2 = z.object({
  data: UserUncheckedCreateInputObjectSchema
});

const schema1 = z.object({
  a: z.number().optional(),
  isPublished: z.boolean().optional(),
})

const schema2 = z.object({
  a: z.string(),
  isPublished: z.number().optional(),
  whats: z.string().optional(),
})
export const testSchema1 = z.object({
  data: z.union([
    schema2,
    schema1,
  ]),
});
export const testSchema2 = z.object({
  data: z.intersection(
    schema2,
    schema1,
  ),
});

type UserCreateOneInput = z.infer<typeof UserCreateOneSchema>;

export const usersRouter = router({
  // aggregateUser: publicProcedure
  //   .input(UserAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     const aggregateUser = await ctx.prisma.user.aggregate(input);
  //     return aggregateUser;
  //   }),
  // createManyUser: publicProcedure
  //   .input(UserCreateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     const createManyUser = await ctx.prisma.user.createMany(input);
  //     return createManyUser;
  //   }),
  createOneUser: publicProcedure
    .input(UserCreateOneSchema4)
    .mutation(async ({ ctx, input }) => {
      input.data.genderId
      input.data
      const createOneUser = await ctx.prisma.user.create(input);
      return createOneUser;
    }),
  deleteManyUser: publicProcedure
    .input(UserDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      const deleteManyUser = await ctx.prisma.user.deleteMany(input);
      return deleteManyUser;
    }),
  deleteOneUser: publicProcedure
    .input(UserDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      const deleteOneUser = await ctx.prisma.user.delete(input);
      return deleteOneUser;
    }),
  findFirstUser: publicProcedure
    .input(UserFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstUser = await ctx.prisma.user.findFirst(input);
      return findFirstUser;
    }),
  findFirstUserOrThrow: publicProcedure
    .input(UserFindFirstSchema)
    .query(async ({ ctx, input }) => {
      const findFirstUserOrThrow =
        await ctx.prisma.user.findFirstOrThrow(input);
      return findFirstUserOrThrow;
    }),
  findManyUser: publicProcedure
    .input(UserFindManySchema)
    .query(async ({ ctx, input }) => {
      const findManyUser = await ctx.prisma.user.findMany(input);
      return findManyUser;
    }),
  findUniqueUser: publicProcedure
    .input(UserFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueUser = await ctx.prisma.user.findUnique(input);
      return findUniqueUser;
    }),
  findUniqueUserOrThrow: publicProcedure
    .input(UserFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      const findUniqueUserOrThrow =
        await ctx.prisma.user.findUniqueOrThrow(input);
      return findUniqueUserOrThrow;
    }),
  groupByUser: publicProcedure
    .input(UserGroupBySchema)
    .query(async ({ ctx, input }) => {
      const groupByUser = await ctx.prisma.user.groupBy(input.);
      return groupByUser;
    }),
  updateManyUser: publicProcedure
    .input(UserUpdateManySchema)
    .mutation(async ({ ctx, input }) => {
      const updateManyUser = await ctx.prisma.user.updateMany(input);
      return updateManyUser;
    }),
  updateOneUser: publicProcedure
    .input(UserUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      const updateOneUser = await ctx.prisma.user.update(input);
      return updateOneUser;
    }),
  upsertOneUser: publicProcedure
    .input(UserUpsertSchema)
    .mutation(async ({ ctx, input }) => {
      const upsertOneUser = await ctx.prisma.user.upsert(input);
      return upsertOneUser;
    }),
});
