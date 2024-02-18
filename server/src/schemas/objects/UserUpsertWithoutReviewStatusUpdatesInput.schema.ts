import { z } from 'zod';
import { UserUpdateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUpdateWithoutReviewStatusUpdatesInput.schema';
import { UserUncheckedUpdateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutReviewStatusUpdatesInput.schema';
import { UserCreateWithoutReviewStatusUpdatesInputObjectSchema } from './UserCreateWithoutReviewStatusUpdatesInput.schema';
import { UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutReviewStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutReviewStatusUpdatesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutReviewStatusUpdatesInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutReviewStatusUpdatesInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutReviewStatusUpdatesInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutReviewStatusUpdatesInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutReviewStatusUpdatesInputObjectSchema = Schema;
