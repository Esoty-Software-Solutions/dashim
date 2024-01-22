import { z } from 'zod';
import { UserCreateWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutSubscriberFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutSubscriberFutureStatusCreationsInput.schema';
import { UserCreateOrConnectWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserCreateOrConnectWithoutSubscriberFutureStatusCreationsInput.schema';
import { UserUpsertWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserUpsertWithoutSubscriberFutureStatusCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserUpdateWithoutSubscriberFutureStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutSubscriberFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSubscriberFutureStatusCreationsNestedInput> =
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
      upsert: z
        .lazy(
          () =>
            UserUpsertWithoutSubscriberFutureStatusCreationsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserUpdateWithoutSubscriberFutureStatusCreationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutSubscriberFutureStatusCreationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutSubscriberFutureStatusCreationsNestedInputObjectSchema =
  Schema;
