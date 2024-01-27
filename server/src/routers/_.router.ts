import { z } from "zod";
import { router, publicProcedure } from "./_trpc.router";
import { procedureRouter } from "./procedure.router";
import { crudRouter } from "./crud.router";

const routerObject = router({
  // GET http://localhost:3000/trpc/greeting
  greeting: publicProcedure.input(z.string().optional()).query((opts) => {
    if (opts.input) {
      return "hello from tRPC v10!. The string you sent is: " + opts.input;
    } else {
      return "hello from tRPC v10!. You can send us a string on this route";
    }
  }),
  healthCheck: publicProcedure.query(() => {
    return "hello from tRPC v10!.";
  }),
  procedure: procedureRouter,
  crud: crudRouter,
});

// export const appRouter = mergeRouters(routerObject); //! This exceeds Max type inference serialization
export const appRouter = routerObject;

// export type definition of API
export type AppRouter = typeof appRouter;
