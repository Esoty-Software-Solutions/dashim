import { z } from 'zod';
import { EntryRecordUncheckedCreateNestedManyWithoutVoiceInputObjectSchema } from './EntryRecordUncheckedCreateNestedManyWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceUncheckedCreateWithoutSubscriberGroupInput> =
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
            EntryRecordUncheckedCreateNestedManyWithoutVoiceInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const VoiceUncheckedCreateWithoutSubscriberGroupInputObjectSchema =
  Schema;
