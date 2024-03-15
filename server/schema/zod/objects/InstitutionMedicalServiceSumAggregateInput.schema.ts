/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InstitutionMedicalServiceSumAggregateInputType>;
export const InstitutionMedicalServiceSumAggregateInputObjectSchema: SchemaType = z
    .object({
        basePrice: z.literal(true).optional(),
    })
    .strict() as SchemaType;
