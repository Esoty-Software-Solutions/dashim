import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CountryCountOrderByAggregateInputObjectSchema } from './CountryCountOrderByAggregateInput.schema';
import { CountryMaxOrderByAggregateInputObjectSchema } from './CountryMaxOrderByAggregateInput.schema';
import { CountryMinOrderByAggregateInputObjectSchema } from './CountryMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CountryOrderByWithAggregationInput> = z
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
    code: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => CountryCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => CountryMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CountryMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CountryOrderByWithAggregationInputObjectSchema = Schema;