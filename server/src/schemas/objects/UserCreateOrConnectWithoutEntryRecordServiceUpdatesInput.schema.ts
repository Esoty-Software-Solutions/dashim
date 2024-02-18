import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserCreateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutEntryRecordServiceUpdatesInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutEntryRecordServiceUpdatesInputObjectSchema =
  Schema;
