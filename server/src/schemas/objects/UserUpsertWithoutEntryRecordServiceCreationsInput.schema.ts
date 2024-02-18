import { z } from 'zod';
import { UserUpdateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUpdateWithoutEntryRecordServiceCreationsInput.schema';
import { UserUncheckedUpdateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutEntryRecordServiceCreationsInput.schema';
import { UserCreateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserCreateWithoutEntryRecordServiceCreationsInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutEntryRecordServiceCreationsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => UserUpdateWithoutEntryRecordServiceCreationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedUpdateWithoutEntryRecordServiceCreationsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => UserCreateWithoutEntryRecordServiceCreationsInputObjectSchema,
        ),
        z.lazy(
          () =>
            UserUncheckedCreateWithoutEntryRecordServiceCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserUpsertWithoutEntryRecordServiceCreationsInputObjectSchema =
  Schema;
