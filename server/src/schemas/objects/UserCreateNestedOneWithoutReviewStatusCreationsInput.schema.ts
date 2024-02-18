import { z } from 'zod';
import { UserCreateWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateWithoutReviewStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutReviewStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutReviewStatusCreationsInput.schema';
import { UserCreateOrConnectWithoutReviewStatusCreationsInputObjectSchema } from './UserCreateOrConnectWithoutReviewStatusCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutReviewStatusCreationsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutReviewStatusCreationsInputObjectSchema =
  Schema;
