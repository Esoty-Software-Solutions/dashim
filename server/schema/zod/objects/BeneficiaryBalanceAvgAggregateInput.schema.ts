/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceAvgAggregateInputType>;
export const BeneficiaryBalanceAvgAggregateInputObjectSchema: SchemaType = z
    .object({
        balancePending: z.literal(true).optional(),
        balanceActual: z.literal(true).optional(),
    })
    .strict() as SchemaType;
