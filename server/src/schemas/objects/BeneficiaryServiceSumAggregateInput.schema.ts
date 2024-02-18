import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceSumAggregateInputType> = z
  .object({
    billedAmmount: z.literal(true).optional(),
    allowedAmmount: z.literal(true).optional(),
    copayAmmount: z.literal(true).optional(),
    cashAmount: z.literal(true).optional(),
    coveredAmount: z.literal(true).optional(),
    defferedAmount: z.literal(true).optional(),
    coinsuranceAmount: z.literal(true).optional(),
  })
  .strict();

export const BeneficiaryServiceSumAggregateInputObjectSchema = Schema;
