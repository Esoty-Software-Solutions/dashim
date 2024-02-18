import { z } from 'zod';
import { UserCreateWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateWithoutReviewStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutReviewStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutReviewStatusCreationsInput.schema';
import { UserCreateOrConnectWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateOrConnectWithoutReviewStatusCreationsInput.schema';
import { UserUpsertWithoutReviewStatusCreationsInputObjectSchema } from './UserUpsertWithoutReviewStatusCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutReviewStatusCreationsInputObjectSchema } from './UserUpdateWithoutReviewStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutReviewStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutReviewStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReviewStatusCreationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutReviewStatusCreationsInputObjectSchema),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutReviewStatusCreationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutReviewStatusCreationsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutReviewStatusCreationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutReviewStatusCreationsInputObjectSchema),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutReviewStatusCreationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutReviewStatusCreationsNestedInputObjectSchema =
  Schema;
