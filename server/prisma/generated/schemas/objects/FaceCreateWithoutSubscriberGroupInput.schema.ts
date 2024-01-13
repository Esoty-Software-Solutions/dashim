import { z } from 'zod';
import { EntryRecordCreateNestedManyWithoutFaceInputObjectSchema } from './EntryRecordCreateNestedManyWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceCreateWithoutSubscriberGroupInput> = z
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
      .lazy(() => EntryRecordCreateNestedManyWithoutFaceInputObjectSchema)
      .optional(),
  })
  .strict();

export const FaceCreateWithoutSubscriberGroupInputObjectSchema = Schema;
