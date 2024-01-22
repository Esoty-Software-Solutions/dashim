import { z } from 'zod';
import { UserCreateWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserCreateWithoutSubscriberFutureStatusChangesInput.schema';
import { UserUncheckedCreateWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutSubscriberFutureStatusChangesInput.schema';
import { UserCreateOrConnectWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserCreateOrConnectWithoutSubscriberFutureStatusChangesInput.schema';
import { UserUpsertWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserUpsertWithoutSubscriberFutureStatusChangesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserUpdateWithoutSubscriberFutureStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutSubscriberFutureStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutSubscriberFutureStatusChangesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              UserCreateWithoutSubscriberFutureStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutSubscriberFutureStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutSubscriberFutureStatusChangesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => UserUpsertWithoutSubscriberFutureStatusChangesInputObjectSchema,
        )
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              UserUpdateWithoutSubscriberFutureStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutSubscriberFutureStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutSubscriberFutureStatusChangesNestedInputObjectSchema =
  Schema;
