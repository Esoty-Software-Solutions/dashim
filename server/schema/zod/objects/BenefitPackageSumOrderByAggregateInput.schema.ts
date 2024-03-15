/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageSumOrderByAggregateInput>;
export const BenefitPackageSumOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        copayDistrubtion: z.lazy(() => SortOrderSchema).optional(),
        threashold: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
