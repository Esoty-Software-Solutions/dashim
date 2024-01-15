import { z } from "zod";
import { router, publicProcedure, mergeRouters } from "./_trpc.router";

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
});

export const appRouter = mergeRouters(routerObject);

// export type definition of API
export type AppRouter = typeof appRouter;
