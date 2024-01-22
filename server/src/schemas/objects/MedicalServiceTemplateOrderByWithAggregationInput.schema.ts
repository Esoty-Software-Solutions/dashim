import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { MedicalServiceTemplateCountOrderByAggregateInputObjectSchema } from './MedicalServiceTemplateCountOrderByAggregateInput.schema';
import { MedicalServiceTemplateMaxOrderByAggregateInputObjectSchema } from './MedicalServiceTemplateMaxOrderByAggregateInput.schema';
import { MedicalServiceTemplateMinOrderByAggregateInputObjectSchema } from './MedicalServiceTemplateMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateOrderByWithAggregationInput> =
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
      deactivationDate: z
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
          () => MedicalServiceTemplateCountOrderByAggregateInputObjectSchema,
        )
        .optional(),
      _max: z
        .lazy(() => MedicalServiceTemplateMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => MedicalServiceTemplateMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalServiceTemplateOrderByWithAggregationInputObjectSchema =
  Schema;
