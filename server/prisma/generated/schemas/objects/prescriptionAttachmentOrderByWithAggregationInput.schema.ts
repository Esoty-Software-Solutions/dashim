import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PrescriptionAttachmentCountOrderByAggregateInputObjectSchema } from './PrescriptionAttachmentCountOrderByAggregateInput.schema';
import { PrescriptionAttachmentMaxOrderByAggregateInputObjectSchema } from './PrescriptionAttachmentMaxOrderByAggregateInput.schema';
import { PrescriptionAttachmentMinOrderByAggregateInputObjectSchema } from './PrescriptionAttachmentMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PrescriptionAttachmentOrderByWithAggregationInput> =
  z
    .object({
      id: z.lazy(() => SortOrderSchema).optional(),
      createdAt: z.lazy(() => SortOrderSchema).optional(),
      updatedAt: z.lazy(() => SortOrderSchema).optional(),
      isPublished: z.lazy(() => SortOrderSchema).optional(),
      isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () => PrescriptionAttachmentCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(() => PrescriptionAttachmentMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => PrescriptionAttachmentMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const PrescriptionAttachmentOrderByWithAggregationInputObjectSchema =
  Schema;
