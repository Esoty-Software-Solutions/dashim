/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicySumOrderByAggregateInput>;
export const InsurancePolicySumOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        Accumulatedlimit: z.lazy(() => SortOrderSchema).optional(),
        serviceEntryTimeWindow: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
