/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumCountOutputTypeSelect>;
export const ReviewStatusEnumCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        transactionBeneficiaryServices: z.boolean().optional(),
        medicalBeneficiaryServices: z.boolean().optional(),
    })
    .strict() as SchemaType;
