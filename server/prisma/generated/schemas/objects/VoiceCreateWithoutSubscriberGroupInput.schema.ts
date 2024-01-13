import { z } from 'zod';
import { EntryRecordCreateNestedManyWithoutVoiceInputObjectSchema } from './EntryRecordCreateNestedManyWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceCreateWithoutSubscriberGroupInput> = z
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
      .lazy(() => EntryRecordCreateNestedManyWithoutVoiceInputObjectSchema)
      .optional(),
  })
  .strict();

export const VoiceCreateWithoutSubscriberGroupInputObjectSchema = Schema;
