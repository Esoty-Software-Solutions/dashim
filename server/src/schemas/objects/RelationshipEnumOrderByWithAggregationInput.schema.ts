import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { RelationshipEnumCountOrderByAggregateInputObjectSchema } from './RelationshipEnumCountOrderByAggregateInput.schema';
import { RelationshipEnumMaxOrderByAggregateInputObjectSchema } from './RelationshipEnumMaxOrderByAggregateInput.schema';
import { RelationshipEnumMinOrderByAggregateInputObjectSchema } from './RelationshipEnumMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RelationshipEnumOrderByWithAggregationInput> = z
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
      .lazy(() => RelationshipEnumCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RelationshipEnumMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RelationshipEnumMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RelationshipEnumOrderByWithAggregationInputObjectSchema = Schema;
