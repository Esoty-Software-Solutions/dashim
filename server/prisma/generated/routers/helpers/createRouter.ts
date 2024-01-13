import * as trpc from "@trpc/server";

import type { Context } from '../../../../src/routers/_context.router';

import trpcOptions from '../../../trpcOptions';

export const t = trpc.initTRPC.context<Context>().create(trpcOptions);

export const publicProcedure = t.procedure;



