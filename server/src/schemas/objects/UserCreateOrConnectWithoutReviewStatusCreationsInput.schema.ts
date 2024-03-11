import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateWithoutReviewStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutReviewStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutReviewStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutReviewStatusCreationsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutReviewStatusCreationsInputObjectSchema),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutReviewStatusCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutReviewStatusCreationsInputObjectSchema =
  Schema;
