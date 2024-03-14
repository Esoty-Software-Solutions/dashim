/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceAvgOrderByAggregateInput>;
export const BeneficiaryBalanceAvgOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        balancePending: z.lazy(() => SortOrderSchema).optional(),
        balanceActual: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
