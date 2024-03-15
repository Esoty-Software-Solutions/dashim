/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { CityEnumCountOrderByAggregateInputObjectSchema } from './CityEnumCountOrderByAggregateInput.schema';
import { CityEnumMaxOrderByAggregateInputObjectSchema } from './CityEnumMaxOrderByAggregateInput.schema';
import { CityEnumMinOrderByAggregateInputObjectSchema } from './CityEnumMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.CityEnumOrderByWithAggregationInput>;
export const CityEnumOrderByWithAggregationInputObjectSchema: SchemaType = z
    .object({
        id: z.lazy(() => SortOrderSchema).optional(),
        createdAt: z.lazy(() => SortOrderSchema).optional(),
        updatedAt: z.lazy(() => SortOrderSchema).optional(),
        isPublished: z.lazy(() => SortOrderSchema).optional(),
        isSoftDeleted: z.lazy(() => SortOrderSchema).optional(),
        arabic: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        english: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
        name: z.lazy(() => SortOrderSchema).optional(),
        countryId: z.lazy(() => SortOrderSchema).optional(),
        _count: z.lazy(() => CityEnumCountOrderByAggregateInputObjectSchema).optional(),
        _max: z.lazy(() => CityEnumMaxOrderByAggregateInputObjectSchema).optional(),
        _min: z.lazy(() => CityEnumMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
