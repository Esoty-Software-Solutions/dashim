/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CountryEnumCountOrderByAggregateInputObjectSchema } from './CountryEnumCountOrderByAggregateInput.schema';
import { CountryEnumMaxOrderByAggregateInputObjectSchema } from './CountryEnumMaxOrderByAggregateInput.schema';
import { CountryEnumMinOrderByAggregateInputObjectSchema } from './CountryEnumMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CountryEnumOrderByWithAggregationInput>;
export const CountryEnumOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        arabic: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        english: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        code: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => CountryEnumCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => CountryEnumMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => CountryEnumMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
