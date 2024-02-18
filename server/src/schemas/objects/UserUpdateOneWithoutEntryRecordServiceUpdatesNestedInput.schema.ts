import { z } from 'zod';
import { UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserCreateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserCreateOrConnectWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserCreateOrConnectWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUpsertWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUpsertWithoutEntryRecordServiceUpdatesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUpdateWithoutEntryRecordServiceUpdatesInput.schema';
import { UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema } from './UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutEntryRecordServiceUpdatesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UserCreateWithoutEntryRecordServiceUpdatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutEntryRecordServiceUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutEntryRecordServiceUpdatesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutEntryRecordServiceUpdatesInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutEntryRecordServiceUpdatesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneWithoutEntryRecordServiceUpdatesNestedInputObjectSchema =
  Schema;
