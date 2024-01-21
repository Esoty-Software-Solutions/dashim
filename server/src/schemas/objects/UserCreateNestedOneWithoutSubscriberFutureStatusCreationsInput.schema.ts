import { z } from 'zod';
import { UserCreateWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutSubscriberFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutSubscriberFutureStatusCreationsInput.schema';
import { UserCreateOrConnectWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserCreateOrConnectWithoutSubscriberFutureStatusCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutSubscriberFutureStatusCreationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutSubscriberFutureStatusCreationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutSubscriberFutureStatusCreationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutSubscriberFutureStatusCreationsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutSubscriberFutureStatusCreationsInputObjectSchema =
  Schema;
