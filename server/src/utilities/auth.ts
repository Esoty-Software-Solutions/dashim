import { type UserType } from "@models/user.model";
// import { getSession } from '@utilities/session'
import { unGuardedPrisma } from "@config/db";
import type { Request as ExpressRequest } from "express";
import ServerError from "@utilities/error";

export const FAKE_USER_ID = "x9cv8ywg9swy55s24tzeyr61";
export async function getUserIdFromCookie(
  request: Request | ExpressRequest,
): Promise<UserType["id"]> {
  const userId = FAKE_USER_ID; //TODO: parse cookie
  if (userId == null) {
    throw new ServerError({
      message: "no userId available in the cookie",
      code: "UNAUTHORIZED",
    });
  }
  return userId;
  // // const session = await getSession(request.headers.get('Cookie'))
  // const session = null
  // if (session.has('userId')) return session.get('userId')
}

export async function getUserFromDb(
  request: Request | ExpressRequest,
): Promise<UserType> {
  const userId = await getUserIdFromCookie(request);

  // can't get this to work due to cyclic dependency
  // const user = await User.getOne(
  //   request,
  //   { where: { id: userId } },
  //   { bypassMiddleware: true }
  // )
  const user = await unGuardedPrisma.user.findUnique({
    where: { id: userId },
  });
  if (user == null) {
    console.error("user from the cookie not found in the database");
    throw new ServerError({
      message: "user not found",
      code: "UNAUTHORIZED",
    });
  }
  return user;
}

export async function getUserPreferenceFromCookie(
  request: Request | ExpressRequest,
): Promise<any | null> {
  // placeHolder
  return null;
}

export async function getUserPreferenceFromDb(
  request: Request | ExpressRequest,
): Promise<any | null> {
  // placeHolder
  return null;
}
