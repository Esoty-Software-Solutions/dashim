import { z } from 'zod';
import { UserCreateWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserCreateWithoutSubscriberFutureStatusChangesInput.schema';
import { UserUncheckedCreateWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutSubscriberFutureStatusChangesInput.schema';
import { UserCreateOrConnectWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserCreateOrConnectWithoutSubscriberFutureStatusChangesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutSubscriberFutureStatusChangesInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutSubscriberFutureStatusChangesInputObjectSchema =
  Schema;
