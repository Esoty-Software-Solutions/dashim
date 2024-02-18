import { z } from 'zod';
import { UserCreateWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateWithoutReviewStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutReviewStatusUpdatesInput.schema';
import { UserCreateOrConnectWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutReviewStatusUpdatesInput.schema';
import { UserUpsertWithoutReviewStatusUpdatesInputObjectSchema } from './UserUpsertWithoutReviewStatusUpdatesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUpdateWithoutReviewStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutReviewStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutReviewStatusUpdatesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutReviewStatusUpdatesInputObjectSchema),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutReviewStatusUpdatesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutReviewStatusUpdatesInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutReviewStatusUpdatesInputObjectSchema),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutReviewStatusUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutReviewStatusUpdatesNestedInputObjectSchema =
  Schema;
