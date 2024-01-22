import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MedicalCenterServiceTemplateCountOrderByAggregateInputObjectSchema } from './MedicalCenterServiceTemplateCountOrderByAggregateInput.schema';
import { MedicalCenterServiceTemplateMaxOrderByAggregateInputObjectSchema } from './MedicalCenterServiceTemplateMaxOrderByAggregateInput.schema';
import { MedicalCenterServiceTemplateMinOrderByAggregateInputObjectSchema } from './MedicalCenterServiceTemplateMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateOrderByWithAggregationInput> =
  z
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
      name: z.lazy(() => SortOrderSchema).optional(),
      dalilCode: z.lazy(() => SortOrderSchema).optional(),
      basePrice: z.lazy(() => SortOrderSchema).optional(),
      IsPriceVaried: z.lazy(() => SortOrderSchema).optional(),
      description: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(
          () =>
            MedicalCenterServiceTemplateCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(
          () =>
            MedicalCenterServiceTemplateMaxOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _min: z
        .lazy(
          () =>
            MedicalCenterServiceTemplateMinOrderByAggregateInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const MedicalCenterServiceTemplateOrderByWithAggregationInputObjectSchema =
  Schema;