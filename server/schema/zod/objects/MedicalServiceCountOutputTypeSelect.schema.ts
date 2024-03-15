/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCountOutputTypeSelect>;
export const MedicalServiceCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        beneficiaryServices: z.boolean().optional(),
        institutionPricing: z.boolean().optional(),
    })
    .strict() as SchemaType;
