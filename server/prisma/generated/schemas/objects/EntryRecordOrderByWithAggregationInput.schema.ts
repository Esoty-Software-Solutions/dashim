import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EntryRecordCountOrderByAggregateInputObjectSchema } from './EntryRecordCountOrderByAggregateInput.schema';
import { EntryRecordMaxOrderByAggregateInputObjectSchema } from './EntryRecordMaxOrderByAggregateInput.schema';
import { EntryRecordMinOrderByAggregateInputObjectSchema } from './EntryRecordMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    subscriberGroupId: z.lazy(() => SortOrderSchema).optional(),
    fingerprintId: z.lazy(() => SortOrderSchema).optional(),
    isValidated: z.lazy(() => SortOrderSchema).optional(),
    isManuallyInserted: z.lazy(() => SortOrderSchema).optional(),
    idCardId: z.lazy(() => SortOrderSchema).optional(),
    faceId: z.lazy(() => SortOrderSchema).optional(),
    voiceId: z.lazy(() => SortOrderSchema).optional(),
    medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => EntryRecordCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => EntryRecordMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => EntryRecordMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const EntryRecordOrderByWithAggregationInputObjectSchema = Schema;
