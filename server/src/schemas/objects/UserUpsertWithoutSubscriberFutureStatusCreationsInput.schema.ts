import { z } from 'zod';
import { UserUpdateWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserUpdateWithoutSubscriberFutureStatusCreationsInput.schema';
import { UserUncheckedUpdateWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutSubscriberFutureStatusCreationsInput.schema';
import { UserCreateWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserCreateWithoutSubscriberFutureStatusCreationsInput.schema';
import { UserUncheckedCreateWithoutSubscriberFutureStatusCreationsInputObjectSchema } from './UserUncheckedCreateWithoutSubscriberFutureStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutSubscriberFutureStatusCreationsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            UserUpdateWithoutSubscriberFutureStatusCreationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutSubscriberFutureStatusCreationsInputObjectSchema,
        ),
      ]),
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

export const UserUpsertWithoutSubscriberFutureStatusCreationsInputObjectSchema =
  Schema;
