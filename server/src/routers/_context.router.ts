import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";
// import { getSessionFromCookie, type Session } from "./auth"; // TODO: fix the auth
import { enhancedPrisma, unGuardedPrisma } from "~/config/db";

/**
 * Defines your inner context shape.
 * Add fields here that the inner context brings.
 */
interface CreateInnerContextOptions
  extends Partial<CreateExpressContextOptions> {
  // session: Session | null;
}

/**
 * Inner context. Will always be available in your procedures, in contrast to the outer context.
 *
 * Also useful for:
 * - testing, so you don't have to mock Next.js' `req`/`res`
 * - tRPC's `createServerSideHelpers` where we don't have `req`/`res`
 *
 * @link https://trpc.io/docs/v11/context#inner-and-outer-context
 */
export async function createContextInner(opts?: CreateInnerContextOptions) {
  return {
    prisma: unGuardedPrisma,
    // session: opts.session,
  };
}

/**
 * Outer context. Used in the routers and will e.g. bring `req` & `res` to the context as "not `undefined`".
 *
 * @link https://trpc.io/docs/v11/context#inner-and-outer-context
 */
export async function createContext(opts: CreateExpressContextOptions) {
  // const session = getSessionFromCookie(opts.req);

  const contextInner = await createContextInner();
  async function test() {
    const context = "hello from context";
    return context;
  }

  const context = await test();

  return {
    ...contextInner,
    req: opts.req,
    res: opts.res,
    test: "hello",
    context,
  };
}

export type Context = Awaited<ReturnType<typeof createContextInner>>;
