import { z } from 'zod';
import { UserUpdateWithoutReviewStatusCreationsInputObjectSchema } from './UserUpdateWithoutReviewStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutReviewStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutReviewStatusCreationsInput.schema';
import { UserCreateWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateWithoutReviewStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutReviewStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutReviewStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutReviewStatusCreationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutReviewStatusCreationsInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutReviewStatusCreationsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutReviewStatusCreationsInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutReviewStatusCreationsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutReviewStatusCreationsInputObjectSchema = Schema;
