import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutSubscriberStatusChangesInputObjectSchema } from './UserCreateWithoutSubscriberStatusChangesInput.schema';
import { UserUncheckedCreateWithoutSubscriberStatusChangesInputObjectSchema } from './UserUncheckedCreateWithoutSubscriberStatusChangesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutSubscriberStatusChangesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutSubscriberStatusChangesInputObjectSchema),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutSubscriberStatusChangesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutSubscriberStatusChangesInputObjectSchema =
  Schema;
