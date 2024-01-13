import { z } from 'zod';
import { SubscriberGroupCreateNestedOneWithoutIdCardInputObjectSchema } from './SubscriberGroupCreateNestedOneWithoutIdCardInput.schema';
import { EntryRecordCreateNestedManyWithoutIdCardInputObjectSchema } from './EntryRecordCreateNestedManyWithoutIdCardInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardCreateInput> = z
  .object({
    id: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    isPublished: z.boolean().optional(),
    isSoftDeleted: z.boolean().optional(),
    isActive: z.boolean().optional(),
    deactivationReason: z.string().optional().nullable(),
    hash: z.string(),
    subscriberGroup: z.lazy(
      () => SubscriberGroupCreateNestedOneWithoutIdCardInputObjectSchema,
    ),
    entryRecords: z
      .lazy(() => EntryRecordCreateNestedManyWithoutIdCardInputObjectSchema)
      .optional(),
  })
  .strict();

export const IDCardCreateInputObjectSchema = Schema;
