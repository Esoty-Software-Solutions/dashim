import { z } from 'zod';
import { UserCreateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserCreateWithoutEntryRecordServiceCreationsInput.schema';
import { UserUncheckedCreateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUncheckedCreateWithoutEntryRecordServiceCreationsInput.schema';
import { UserCreateOrConnectWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserCreateOrConnectWithoutEntryRecordServiceCreationsInput.schema';
import { UserUpsertWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUpsertWithoutEntryRecordServiceCreationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUpdateWithoutEntryRecordServiceCreationsInput.schema';
import { UserUncheckedUpdateWithoutEntryRecordServiceCreationsInputObjectSchema } from './UserUncheckedUpdateWithoutEntryRecordServiceCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEntryRecordServiceCreationsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => UserCreateWithoutEntryRecordServiceCreationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedCreateWithoutEntryRecordServiceCreationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            UserCreateOrConnectWithoutEntryRecordServiceCreationsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => UserUpsertWithoutEntryRecordServiceCreationsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateWithoutEntryRecordServiceCreationsInputObjectSchema,
          ),
          z.lazy(
            () =>
              UserUncheckedUpdateWithoutEntryRecordServiceCreationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutEntryRecordServiceCreationsNestedInputObjectSchema =
  Schema;
