/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyCountOutputTypeSelect>;
export const InsurancePolicyCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        beneficiaryEntities: z.boolean().optional(),
        benefitPackages: z.boolean().optional(),
        medicalCenters: z.boolean().optional(),
    })
    .strict() as SchemaType;
