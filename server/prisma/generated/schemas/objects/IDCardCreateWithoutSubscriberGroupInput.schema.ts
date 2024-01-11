import { z } from 'zod';
import { EntryRecordCreateNestedManyWithoutIdCardInputObjectSchema } from './EntryRecordCreateNestedManyWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardCreateWithoutSubscriberGroupInput> = z
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
      .lazy(() => EntryRecordCreateNestedManyWithoutIdCardInputObjectSchema)
      .optional(),
  })
  .strict();

export const IDCardCreateWithoutSubscriberGroupInputObjectSchema = Schema;
