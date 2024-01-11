import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    isActive: z.lazy(() => SortOrderSchema).optional(),
    deactivationReason: z.lazy(() => SortOrderSchema).optional(),
    subscriberGroupId: z.lazy(() => SortOrderSchema).optional(),
    fingerprintId: z.lazy(() => SortOrderSchema).optional(),
    isValidated: z.lazy(() => SortOrderSchema).optional(),
    isManuallyInserted: z.lazy(() => SortOrderSchema).optional(),
    idCardId: z.lazy(() => SortOrderSchema).optional(),
    faceId: z.lazy(() => SortOrderSchema).optional(),
    voiceId: z.lazy(() => SortOrderSchema).optional(),
    medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const EntryRecordMaxOrderByAggregateInputObjectSchema = Schema;
