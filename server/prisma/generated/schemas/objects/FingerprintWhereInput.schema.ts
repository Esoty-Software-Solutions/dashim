import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { BoolFilterObjectSchema } from './BoolFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FingerTypeRelationFilterObjectSchema } from './FingerTypeRelationFilter.schema';
import { FingerTypeWhereInputObjectSchema } from './FingerTypeWhereInput.schema';
import { SubscriberGroupRelationFilterObjectSchema } from './SubscriberGroupRelationFilter.schema';
import { SubscriberGroupWhereInputObjectSchema } from './SubscriberGroupWhereInput.schema';
import { EntryRecordListRelationFilterObjectSchema } from './EntryRecordListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => FingerprintWhereInputObjectSchema),
        z.lazy(() => FingerprintWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => FingerprintWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => FingerprintWhereInputObjectSchema),
        z.lazy(() => FingerprintWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    createdAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    updatedAt: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
    isPublished: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isSoftDeleted: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    isActive: z
      .union([z.lazy(() => BoolFilterObjectSchema), z.boolean()])
      .optional(),
    deactivationReason: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    fingerTypeId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    hash: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    subscriberGroupId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    fingerType: z
      .union([
        z.lazy(() => FingerTypeRelationFilterObjectSchema),
        z.lazy(() => FingerTypeWhereInputObjectSchema),
      ])
      .optional(),
    subscriberGroup: z
      .union([
        z.lazy(() => SubscriberGroupRelationFilterObjectSchema),
        z.lazy(() => SubscriberGroupWhereInputObjectSchema),
      ])
      .optional(),
    entryRecords: z
      .lazy(() => EntryRecordListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const FingerprintWhereInputObjectSchema = Schema;
