import { z } from 'zod';
import { SubscriberGroupCreateNestedOneWithoutFaceInputObjectSchema } from './SubscriberGroupCreateNestedOneWithoutFaceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceCreateWithoutEntryRecordsInput> = z
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
      () => SubscriberGroupCreateNestedOneWithoutFaceInputObjectSchema,
    ),
  })
  .strict();

export const FaceCreateWithoutEntryRecordsInputObjectSchema = Schema;
