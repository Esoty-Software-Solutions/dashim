// import * as trpc from "@trpc/server";
// import * as trpcExpress from "@trpc/server/adapters/express";
// import { type Context } from "~/routers/_context.router";
import { t } from "prisma/generated/routers/helpers/createRouter";

import cookie from "cookie";

// const t = trpc.initTRPC.create()
// const t = trpc.initTRPC.context<Context>().create();

// export const router = t.router;
// export const mergeRouters = t.mergeRouters;
// export const publicProcedure = t.procedure.use((opts) => {
//   // @ts-ignore
//   if (!opts.ctx.req || !opts.ctx.res) {
//     throw new Error("You are missing `req` or `res` in your call.");
//   }
//   // console.log('-----------------------------')
//   // console.log('opts.ctx.req', opts.ctx.req)
//   // console.log('-----------------------------')
//   return opts.next({
//     ctx: {
//       // We overwrite the context with the truthy `req` & `res`, which will also overwrite the types used in your procedure.
//       // @ts-ignore
//       req: opts.ctx.req,
//       // @ts-ignore
//       res: opts.ctx.res,
//     },
//   });
// });
