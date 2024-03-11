/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EntryRecordCountOrderByAggregateInputObjectSchema } from './EntryRecordCountOrderByAggregateInput.schema';
import { EntryRecordMaxOrderByAggregateInputObjectSchema } from './EntryRecordMaxOrderByAggregateInput.schema';
import { EntryRecordMinOrderByAggregateInputObjectSchema } from './EntryRecordMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordOrderByWithAggregationInput>;
export const EntryRecordOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        createdById: z.lazy(() => SortOrderSchema).optional(),
        updatedById: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        isActive: z.lazy(() => SortOrderSchema).optional(),
        deactivationReason: z
            .union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)])
            .optional(),
        deactivationDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        isValidated: z.lazy(() => SortOrderSchema).optional(),
        isManuallyInserted: z.lazy(() => SortOrderSchema).optional(),
        notes: z.lazy(() => SortOrderSchema).optional(),
        beneficiaryId: z.lazy(() => SortOrderSchema).optional(),
        fingerprintId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        idCardId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        faceId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        voiceId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        medicalCenterId: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => EntryRecordCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => EntryRecordMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => EntryRecordMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
