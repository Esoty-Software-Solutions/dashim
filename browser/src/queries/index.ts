import { createTRPCProxyClient } from "@trpc/client";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";

import type { AppRouter } from "dashim_server/src/routers/_.router";

const url = import.meta.env.VITE_FULL_TRPC_URL;

export const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url })],
});

const s = client.user.findManyUser.query({});

const t = client.user.createManyUser.mutate({});
const a = client.user.createOneUser.mutate({
  data: { gender: { connectOrCreate: {} } },
});
