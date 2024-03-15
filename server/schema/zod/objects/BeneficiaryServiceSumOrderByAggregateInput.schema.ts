/* eslint-disable */
import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceSumOrderByAggregateInput>;
export const BeneficiaryServiceSumOrderByAggregateInputObjectSchema: SchemaType = z
    .object({
        billedAmmount: z.lazy(() => SortOrderSchema).optional(),
        allowedAmmount: z.lazy(() => SortOrderSchema).optional(),
        copayAmmount: z.lazy(() => SortOrderSchema).optional(),
        cashAmount: z.lazy(() => SortOrderSchema).optional(),
        coveredAmount: z.lazy(() => SortOrderSchema).optional(),
        defferedAmount: z.lazy(() => SortOrderSchema).optional(),
        coinsuranceAmount: z.lazy(() => SortOrderSchema).optional(),
    })
    .strict() as SchemaType;
