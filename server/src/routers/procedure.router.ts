import {
  CreateBeneficiaryEntityInputSchema,
  ListBeneficiaryEntityInputSchema,
} from "@schemas/procedures/beneficiary.procedure.schema";
import { _procedure } from "@controllers/_procedure.controller";
import {
  router,
  publicProcedure,
  throwCustomError,
} from "@routers/_trpc.router";

export const procedureRouter = router({
  listBeneficiaryEntities: publicProcedure
    .input(ListBeneficiaryEntityInputSchema)
    .query(async ({ ctx, input }) => {
      try {
        return _procedure.listBeneficiaryEntities(ctx.req, input);
      } catch (error) {
        throwCustomError(error);
      }
    }),

  createBeneficiaryEntity: publicProcedure
    .input(CreateBeneficiaryEntityInputSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        return _procedure.createBeneficiaryEntity(ctx.req, input);
      } catch (error) {
        throwCustomError(error);
      }
    }),
});
