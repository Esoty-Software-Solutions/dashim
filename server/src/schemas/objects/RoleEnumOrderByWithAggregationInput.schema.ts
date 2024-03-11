import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RoleEnumCountOrderByAggregateInputObjectSchema } from './RoleEnumCountOrderByAggregateInput.schema';
import { RoleEnumMaxOrderByAggregateInputObjectSchema } from './RoleEnumMaxOrderByAggregateInput.schema';
import { RoleEnumMinOrderByAggregateInputObjectSchema } from './RoleEnumMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleEnumOrderByWithAggregationInput> = z
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
      .lazy(() => RoleEnumCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => RoleEnumMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => RoleEnumMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const RoleEnumOrderByWithAggregationInputObjectSchema = Schema;
