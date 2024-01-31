import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // UserAggregateSchema,
  UserCreateManySchema,
  UserCreateOneSchema,
  UserDeleteManySchema,
  UserDeleteOneSchema,
  UserFindFirstSchema,
  UserFindManySchema,
  UserFindUniqueSchema,
  // UserGroupBySchema,
  // UserUpdateManySchema,
  UserUpdateOneSchema,
  // UserUpsertSchema,
  UserCountSchema,
} from "@schemas/routers/user.schema";

export const userRouter = router({
  // aggregate: publicProcedure
  //   //.input(UserAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.user.aggregate(UserAggregateSchema.parse(input));
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    //.input(UserCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.createMany(
          UserCreateManySchema.parse(input),
        );
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    //.input(UserCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.create(UserCreateOneSchema.parse(input));
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    //.input(UserDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.deleteMany(
          UserDeleteManySchema.parse(input),
        );
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    //.input(UserDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.delete(UserDeleteOneSchema.parse(input));
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    //.input(UserFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.findFirst(
          UserFindFirstSchema.parse(input),
        );
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   //.input(UserFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.user.findFirstOrThrow(.parse(input));
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    //.input(UserFindManySchema)
    .query(async ({ ctx, input }) => {
      const validInput = UserFindManySchema.parse(input);
      try {
        const [data, filteredCount, unFilteredCount] = await Promise.all([
          ctx.prisma.user.findMany(validInput),
          ctx.prisma.user.count({ where: validInput?.where }),
          ctx.prisma.user.count(),
        ]);
        const statistics: {
          key: string;
          value: string | number | boolean;
        }[] = [];
        return {
          data,
          filteredCount,
          unFilteredCount,
          statistics,
        };
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    //.input(UserFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.findUnique(
          UserFindUniqueSchema.parse(input),
        );
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    //.input(UserFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.user.findUniqueOrThrow(
          UserFindUniqueSchema.parse(input),
        );
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   //.input(UserGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.user.groupBy({
  //         where: input.where,
  //         orderBy: input.orderBy,
  //         by: input.by,
  //         having: input.having,
  //         take: input.take,
  //         skip: input.skip,
  //       });
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  // updateMany: publicProcedure
  //   //.input(UserUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.user.updateMany(UserUpdateManySchema.parse(input));
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    //.input(UserUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.update(UserUpdateOneSchema.parse(input));
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   //.input(UserUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.user.upsert(.parse(input));
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    //.input(UserCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.user.count(UserCountSchema.parse(input));
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
