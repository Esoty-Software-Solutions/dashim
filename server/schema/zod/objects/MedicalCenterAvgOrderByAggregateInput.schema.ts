/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterAvgOrderByAggregateInput>;
export const MedicalCenterAvgOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        latitude: z.lazy(() => SortOrderSchema).optional(),
        longitude: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
