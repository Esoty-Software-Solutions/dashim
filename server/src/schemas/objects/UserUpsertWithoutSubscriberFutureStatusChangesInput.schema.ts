import { z } from 'zod';
import { UserUpdateWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserUpdateWithoutSubscriberFutureStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutSubscriberFutureStatusChangesInput.schema';
import { UserCreateWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserCreateWithoutSubscriberFutureStatusChangesInput.schema';
import { UserUncheckedCreateWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutSubscriberFutureStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutSubscriberFutureStatusChangesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => UserUpdateWithoutSubscriberFutureStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutSubscriberFutureStatusChangesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => UserCreateWithoutSubscriberFutureStatusChangesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutSubscriberFutureStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutSubscriberFutureStatusChangesInputObjectSchema =
  Schema;
