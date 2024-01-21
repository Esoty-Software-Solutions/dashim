import { z } from 'zod';
import { UserUpdateWithoutSubscriberStatusChangesInputObjectSchema } from './UserUpdateWithoutSubscriberStatusChangesInput.schema';
import { UserUncheckedUpdateWithoutSubscriberStatusChangesInputObjectSchema } from './UserUncheckedUpdateWithoutSubscriberStatusChangesInput.schema';
import { UserCreateWithoutSubscriberStatusChangesInputObjectSchema } from './UserCreateWithoutSubscriberStatusChangesInput.schema';
import { UserUncheckedCreateWithoutSubscriberStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutSubscriberStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutSubscriberStatusChangesInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => UserUpdateWithoutSubscriberStatusChangesInputObjectSchema),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutSubscriberStatusChangesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => UserCreateWithoutSubscriberStatusChangesInputObjectSchema),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutSubscriberStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutSubscriberStatusChangesInputObjectSchema = Schema;
