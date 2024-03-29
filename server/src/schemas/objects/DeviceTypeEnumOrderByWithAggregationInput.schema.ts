import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { DeviceTypeEnumCountOrderByAggregateInputObjectSchema } from './DeviceTypeEnumCountOrderByAggregateInput.schema';
import { DeviceTypeEnumMaxOrderByAggregateInputObjectSchema } from './DeviceTypeEnumMaxOrderByAggregateInput.schema';
import { DeviceTypeEnumMinOrderByAggregateInputObjectSchema } from './DeviceTypeEnumMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DeviceTypeEnumOrderByWithAggregationInput> = z
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
      .lazy(() => DeviceTypeEnumCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => DeviceTypeEnumMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => DeviceTypeEnumMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const DeviceTypeEnumOrderByWithAggregationInputObjectSchema = Schema;
