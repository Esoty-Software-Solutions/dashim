import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";

import { SubscriberFindManySchema } from "@schemas/routers/subscriber.schema";
import { _viewTable } from "@controllers/_procedure.controller";

export const viewTableRouter = router({
  // aggregate: publicProcedure
  //   .input(BeneficiaryAggregateSchema)
  //   .query(async ({ ctx, input }) => {
  //     try {
  //       return await ctx.prisma.beneficiary.aggregate(input);
  //     } catch (error) {
  //       throwCustomError(error);
  //     }
  //   }),

  subscribers: publicProcedure
    .input(SubscriberFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        // ctx.userId, input;
        return _viewTable._getSubscribers(ctx.req, input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
