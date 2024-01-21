import { z } from 'zod';
import { UserCreateWithoutSubscriberStatusChangesInputObjectSchema } from './UserCreateWithoutSubscriberStatusChangesInput.schema';
import { UserUncheckedCreateWithoutSubscriberStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutSubscriberStatusChangesInput.schema';
import { UserCreateOrConnectWithoutSubscriberStatusChangesInputObjectSchema } from './UserCreateOrConnectWithoutSubscriberStatusChangesInput.schema';
import { UserUpsertWithoutSubscriberStatusChangesInputObjectSchema } from './UserUpsertWithoutSubscriberStatusChangesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutSubscriberStatusChangesInputObjectSchema } from './UserUpdateWithoutSubscriberStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutSubscriberStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutSubscriberStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSubscriberStatusChangesNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutSubscriberStatusChangesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithoutSubscriberStatusChangesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutSubscriberStatusChangesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutSubscriberStatusChangesNestedInputObjectSchema =
  Schema;
