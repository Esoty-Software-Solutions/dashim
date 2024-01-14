import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { DiagnosesAttachmentCountOrderByAggregateInputObjectSchema } from './DiagnosesAttachmentCountOrderByAggregateInput.schema';
import { DiagnosesAttachmentAvgOrderByAggregateInputObjectSchema } from './DiagnosesAttachmentAvgOrderByAggregateInput.schema';
import { DiagnosesAttachmentMaxOrderByAggregateInputObjectSchema } from './DiagnosesAttachmentMaxOrderByAggregateInput.schema';
import { DiagnosesAttachmentMinOrderByAggregateInputObjectSchema } from './DiagnosesAttachmentMinOrderByAggregateInput.schema';
import { DiagnosesAttachmentSumOrderByAggregateInputObjectSchema } from './DiagnosesAttachmentSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiagnosesAttachmentOrderByWithAggregationInput> =
  z
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
      _count: z
        .lazy(() => DiagnosesAttachmentCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => DiagnosesAttachmentAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => DiagnosesAttachmentMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => DiagnosesAttachmentMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => DiagnosesAttachmentSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const DiagnosesAttachmentOrderByWithAggregationInputObjectSchema =
  Schema;
