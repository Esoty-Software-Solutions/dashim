import { z } from "zod";
// import { router, publicProcedure, mergeRouters } from "./_trpc.router";

import { appRouter } from "../../prisma/generated/routers/index";

// const routerObject = router({
//   // GET http://localhost:3000/trpc/greeting
//   greeting: publicProcedure.query((opts) => {
//     return "hello from tRPC v10!";
//   }),
// });

// export const appRouter1 = mergeRouters(routerObject, modelRouter);
export { appRouter };

// export type definition of API
export type AppRouter = typeof appRouter;
