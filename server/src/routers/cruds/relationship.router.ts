import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";
import {
  // RelationshipAggregateSchema,
  RelationshipCreateManySchema,
  RelationshipCreateOneSchema,
  RelationshipDeleteManySchema,
  RelationshipDeleteOneSchema,
  RelationshipFindFirstSchema,
  RelationshipFindManySchema,
  RelationshipFindUniqueSchema,
  // RelationshipGroupBySchema,
  // RelationshipUpdateManySchema,
  RelationshipUpdateOneSchema,
  // RelationshipUpsertSchema,
  RelationshipCountSchema,
} from "@schemas/routers/relationship.schema";

export const relationshipRouter = router({
  // aggregate: publicProcedure
  //   .input(RelationshipAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.relationship.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  createMany: publicProcedure
    .input(RelationshipCreateManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.relationship.createMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createOne: publicProcedure
    .input(RelationshipCreateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.relationship.create(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteMany: publicProcedure
    .input(RelationshipDeleteManySchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.relationship.deleteMany(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  deleteOne: publicProcedure
    .input(RelationshipDeleteOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.relationship.delete(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findFirst: publicProcedure
    .input(RelationshipFindFirstSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.relationship.findFirst(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // findFirstOrThrow: publicProcedure
  //   .input(RelationshipFindFirstSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.relationship.findFirstOrThrow(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  findMany: publicProcedure
    .input(RelationshipFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        const [data, fCount, uFCount] = await Promise.all([
          ctx.prisma.relationship.findMany(input),
          ctx.prisma.relationship.count({ where: input?.where }),
          ctx.prisma.relationship.count(),
        ]);
        return {
          data,
          fCount,
          uFCount,
        };
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUnique: publicProcedure
    .input(RelationshipFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.relationship.findUnique(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  findUniqueOrThrow: publicProcedure
    .input(RelationshipFindUniqueSchema)
    .query(async ({ ctx, input }) => {
      try {
        return ctx.prisma.relationship.findUniqueOrThrow(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // groupBy: publicProcedure
  //   .input(RelationshipGroupBySchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.relationship.groupBy({
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
  //   .input(RelationshipUpdateManySchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.relationship.updateMany(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  updateOne: publicProcedure
    .input(RelationshipUpdateOneSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.relationship.update(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  // upsertOne: publicProcedure
  //   .input(RelationshipUpsertSchema)
  //   .mutation(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.relationship.upsert(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  count: publicProcedure
    .input(RelationshipCountSchema)
    .query(async ({ ctx, input }) => {
      try {
        return await ctx.prisma.relationship.count(input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
