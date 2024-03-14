/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryServiceSumAggregateInputType>;
export const BeneficiaryServiceSumAggregateInputObjectSchema: SchemaType = z
    .object({
        billedAmmount: z.literal(true).optional(),
        allowedAmmount: z.literal(true).optional(),
        copayAmmount: z.literal(true).optional(),
        cashAmount: z.literal(true).optional(),
        coveredAmount: z.literal(true).optional(),
        defferedAmount: z.literal(true).optional(),
        coinsuranceAmount: z.literal(true).optional(),
    })
    .strict() as SchemaType;
