import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { GenderEnumCountOrderByAggregateInputObjectSchema } from './GenderEnumCountOrderByAggregateInput.schema';
import { GenderEnumMaxOrderByAggregateInputObjectSchema } from './GenderEnumMaxOrderByAggregateInput.schema';
import { GenderEnumMinOrderByAggregateInputObjectSchema } from './GenderEnumMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.GenderEnumOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    isPublished: z.lazy(() => SortOrderSchema).optional(),
    isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
    arabic: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    english: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => GenderEnumCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => GenderEnumMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => GenderEnumMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const GenderEnumOrderByWithAggregationInputObjectSchema = Schema;
