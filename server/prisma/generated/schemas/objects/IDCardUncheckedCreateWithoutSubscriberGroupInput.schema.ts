import { z } from 'zod';
import { EntryRecordUncheckedCreateNestedManyWithoutIdCardInputObjectSchema } from './EntryRecordUncheckedCreateNestedManyWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardUncheckedCreateWithoutSubscriberGroupInput> =
  z
    .object({
      id: z.string(),
      createdAt: z.coerce.date().optional(),
      updatedAt: z.coerce.date().optional(),
      isPublished: z.boolean().optional(),
      isSoftDeleted: z.boolean().optional(),
      isActive: z.boolean().optional(),
      deactivationReason: z.string().optional().nullable(),
      hash: z.string(),
      entryRecords: z
        .lazy(
          () =>
            EntryRecordUncheckedCreateNestedManyWithoutIdCardInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const IDCardUncheckedCreateWithoutSubscriberGroupInputObjectSchema =
  Schema;
