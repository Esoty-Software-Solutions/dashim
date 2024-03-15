/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { LabReportAttachmentCountOrderByAggregateInputObjectSchema } from './LabReportAttachmentCountOrderByAggregateInput.schema';
import { LabReportAttachmentMaxOrderByAggregateInputObjectSchema } from './LabReportAttachmentMaxOrderByAggregateInput.schema';
import { LabReportAttachmentMinOrderByAggregateInputObjectSchema } from './LabReportAttachmentMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.LabReportAttachmentOrderByWithAggregationInput>;
export const LabReportAttachmentOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => LabReportAttachmentCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => LabReportAttachmentMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => LabReportAttachmentMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
