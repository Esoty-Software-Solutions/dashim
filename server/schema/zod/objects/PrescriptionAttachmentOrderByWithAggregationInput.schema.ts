/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PrescriptionAttachmentCountOrderByAggregateInputObjectSchema } from './PrescriptionAttachmentCountOrderByAggregateInput.schema';
import { PrescriptionAttachmentMaxOrderByAggregateInputObjectSchema } from './PrescriptionAttachmentMaxOrderByAggregateInput.schema';
import { PrescriptionAttachmentMinOrderByAggregateInputObjectSchema } from './PrescriptionAttachmentMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.PrescriptionAttachmentOrderByWithAggregationInput>;
export const PrescriptionAttachmentOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => PrescriptionAttachmentCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => PrescriptionAttachmentMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => PrescriptionAttachmentMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
