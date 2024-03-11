/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DiagnosisAttachmentCountOrderByAggregateInputObjectSchema } from './DiagnosisAttachmentCountOrderByAggregateInput.schema';
import { DiagnosisAttachmentAvgOrderByAggregateInputObjectSchema } from './DiagnosisAttachmentAvgOrderByAggregateInput.schema';
import { DiagnosisAttachmentMaxOrderByAggregateInputObjectSchema } from './DiagnosisAttachmentMaxOrderByAggregateInput.schema';
import { DiagnosisAttachmentMinOrderByAggregateInputObjectSchema } from './DiagnosisAttachmentMinOrderByAggregateInput.schema';
import { DiagnosisAttachmentSumOrderByAggregateInputObjectSchema } from './DiagnosisAttachmentSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.DiagnosisAttachmentOrderByWithAggregationInput>;
export const DiagnosisAttachmentOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        link: z.lazy(() => SortOrderSchema).optional(),
        size: z.lazy(() => SortOrderSchema).optional(),
        contentType: z.lazy(() => SortOrderSchema).optional(),
        metadata: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => DiagnosisAttachmentCountOrderByAggregateInputObjectSchema).optional(),
        _avg: z.lazy(() => DiagnosisAttachmentAvgOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => DiagnosisAttachmentMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => DiagnosisAttachmentMinOrderByAggregateInputObjectSchema).optional(),
        _sum: z.lazy(() => DiagnosisAttachmentSumOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
