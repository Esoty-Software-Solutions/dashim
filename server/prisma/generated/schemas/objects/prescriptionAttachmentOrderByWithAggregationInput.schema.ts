import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { prescriptionAttachmentCountOrderByAggregateInputObjectSchema } from './prescriptionAttachmentCountOrderByAggregateInput.schema';
import { prescriptionAttachmentMaxOrderByAggregateInputObjectSchema } from './prescriptionAttachmentMaxOrderByAggregateInput.schema';
import { prescriptionAttachmentMinOrderByAggregateInputObjectSchema } from './prescriptionAttachmentMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.prescriptionAttachmentOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isPublished: z.lazy(() => SortOrderSchema).optional(),
      isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () => prescriptionAttachmentCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(() => prescriptionAttachmentMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => prescriptionAttachmentMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const prescriptionAttachmentOrderByWithAggregationInputObjectSchema =
  Schema;
