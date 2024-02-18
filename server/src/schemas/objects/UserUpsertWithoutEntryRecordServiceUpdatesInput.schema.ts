import { z } from 'zod';
import { UserUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUpdateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserCreateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutEntryRecordServiceUpdatesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => UserUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema,
        ),
      ]),
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

export const UserUpsertWithoutEntryRecordServiceUpdatesInputObjectSchema =
  Schema;
