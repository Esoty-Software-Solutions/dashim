import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CitiesCountOrderByAggregateInputObjectSchema } from './CitiesCountOrderByAggregateInput.schema';
import { CitiesMaxOrderByAggregateInputObjectSchema } from './CitiesMaxOrderByAggregateInput.schema';
import { CitiesMinOrderByAggregateInputObjectSchema } from './CitiesMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.CitiesOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => CitiesCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => CitiesMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => CitiesMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const CitiesOrderByWithAggregationInputObjectSchema = Schema;
