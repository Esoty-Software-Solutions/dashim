import { createTRPCProxyClient } from "@trpc/client";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";

import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "dashim_server/src/routers/_.router";
export type { AppRouter } from "dashim_server/src/routers/_.router";

/// <reference types="../../../server/node_modules/.prisma/client" />

const url = import.meta.env.VITE_FULL_TRPC_URL;

// @ts-ignore
export const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url })],
});

export type RouterOutput = inferRouterOutputs<AppRouter>;
export type RouterInput = inferRouterInputs<AppRouter>;
