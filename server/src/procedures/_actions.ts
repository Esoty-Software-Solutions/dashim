import { unGuardedPrisma } from "@config/db";
import { Prisma } from "@prisma/client";
import ServerError from "@utilities/error";

export const actions = {
  getSelfRelationshipObject: async () => {
    try {
      return unGuardedPrisma.relationshipEnum.findUniqueOrThrow({
        where: { name: "self" },
        select: { id: true },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        throw new ServerError({
          message: `relationship "self" might not exist: ${e}`,
          code: "UNPROCESSABLE_CONTENT",
        });
      }
      throw e;
    }
  },
  getFatherRelationshipObject: async () => {
    try {
      return unGuardedPrisma.relationshipEnum.findUniqueOrThrow({
        where: { name: "father" },
        select: { id: true },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        throw new ServerError({
          message: `relationship "self" might not exist: ${e}`,
          code: "UNPROCESSABLE_CONTENT",
        });
      }
      throw e;
    }
  },
  getMotherRelationshipObject: async () => {
    try {
      return unGuardedPrisma.relationshipEnum.findUniqueOrThrow({
        where: { name: "mother" },
        select: { id: true },
      });
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        throw new ServerError({
          message: `relationship "self" might not exist: ${e}`,
          code: "UNPROCESSABLE_CONTENT",
        });
      }
      throw e;
    }
  },
};
