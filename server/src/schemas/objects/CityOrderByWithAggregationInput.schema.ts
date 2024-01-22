import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CityCountOrderByAggregateInputObjectSchema } from './CityCountOrderByAggregateInput.schema';
import { CityMaxOrderByAggregateInputObjectSchema } from './CityMaxOrderByAggregateInput.schema';
import { CityMinOrderByAggregateInputObjectSchema } from './CityMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CityOrderByWithAggregationInput> = z
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
    countryId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => CityCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => CityMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CityMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CityOrderByWithAggregationInputObjectSchema = Schema;
