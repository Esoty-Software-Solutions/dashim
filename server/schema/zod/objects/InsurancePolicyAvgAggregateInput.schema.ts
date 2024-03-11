/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyAvgAggregateInputType>;
export const InsurancePolicyAvgAggregateInputObjectSchema: SchemaType = z
    .object({
        Accumulatedlimit: z.literal(true).optional(),
        serviceEntryTimeWindow: z.literal(true).optional(),
    })
    .strict() as SchemaType;
