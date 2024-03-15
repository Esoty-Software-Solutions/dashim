/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageSumAggregateInputType>;
export const BenefitPackageSumAggregateInputObjectSchema: SchemaType = z
    .object({
        copayDistrubtion: z.literal(true).optional(),
        threashold: z.literal(true).optional(),
    })
    .strict() as SchemaType;
