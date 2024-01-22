import { z } from 'zod';
import { UserCreateWithoutSubscriberStatusChangesInputObjectSchema } from './UserCreateWithoutSubscriberStatusChangesInput.schema';
import { UserUncheckedCreateWithoutSubscriberStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutSubscriberStatusChangesInput.schema';
import { UserCreateOrConnectWithoutSubscriberStatusChangesInputObjectSchema } from './UserCreateOrConnectWithoutSubscriberStatusChangesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutSubscriberStatusChangesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UserCreateWithoutSubscriberStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutSubscriberStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutSubscriberStatusChangesInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutSubscriberStatusChangesInputObjectSchema =
  Schema;
