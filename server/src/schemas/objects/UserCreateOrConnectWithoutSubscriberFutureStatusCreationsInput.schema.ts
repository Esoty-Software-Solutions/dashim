import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutSubscriberFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutSubscriberFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutSubscriberFutureStatusCreationsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            UserCreateWithoutSubscriberFutureStatusCreationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutSubscriberFutureStatusCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutSubscriberFutureStatusCreationsInputObjectSchema =
  Schema;
