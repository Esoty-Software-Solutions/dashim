/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageCountOutputTypeSelect>;
export const BenefitPackageCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        medicalServiceCategories: z.boolean().optional(),
        beneficiaryBalances: z.boolean().optional(),
    })
    .strict() as SchemaType;
