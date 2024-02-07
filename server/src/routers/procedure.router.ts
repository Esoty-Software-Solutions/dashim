import { SubscriberFindManySchema } from "@schemas/routers/subscriber.schema";
import { CreateBeneficiariesSchema } from "@schemas/procedures/institutionProcedureSchema";
import { _procedure } from "@controllers/_procedure.controller";
import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";

export const procedureRouter = router({
  listSubscribers: publicProcedure
    .input(SubscriberFindManySchema)
    .query(async ({ ctx, input }) => {
      try {
        return _procedure.listBeneficiaries(ctx.req, input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  CreateSubscriber: publicProcedure
    .input(CreateBeneficiariesSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return _procedure.CreateBeneficiaries(ctx.req, input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
