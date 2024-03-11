/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceSumOrderByAggregateInput>;
export const InstitutionMedicalServiceSumOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        basePrice: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
