/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryEntityCountOutputTypeSelect>;
export const BeneficiaryEntityCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        beneficiaries: z.boolean().optional(),
        futureStatus: z.boolean().optional(),
    })
    .strict() as SchemaType;
