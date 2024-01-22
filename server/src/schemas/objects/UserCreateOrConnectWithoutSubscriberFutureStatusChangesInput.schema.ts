import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserCreateWithoutSubscriberFutureStatusChangesInput.schema';
import { UserUncheckedCreateWithoutSubscriberFutureStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutSubscriberFutureStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutSubscriberFutureStatusChangesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
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

export const UserCreateOrConnectWithoutSubscriberFutureStatusChangesInputObjectSchema =
  Schema;
