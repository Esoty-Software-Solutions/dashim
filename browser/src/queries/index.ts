import { createTRPCProxyClient } from "@trpc/client";
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";

import type { AppRouter } from "dashim_server/src/router/_router";

const url = import.meta.env.VITE_FULL_TRPC_URL;

export const client = createTRPCProxyClient<AppRouter>({
  links: [httpBatchLink({ url })],
});
