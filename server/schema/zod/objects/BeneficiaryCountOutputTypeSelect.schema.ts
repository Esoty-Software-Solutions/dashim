/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryCountOutputTypeSelect>;
export const BeneficiaryCountOutputTypeSelectObjectSchema: SchemaType = z
    .object({
        fingerprint: z.boolean().optional(),
        idCard: z.boolean().optional(),
        face: z.boolean().optional(),
        voice: z.boolean().optional(),
        entryRecords: z.boolean().optional(),
        beneficiaryBalances: z.boolean().optional(),
        futureStatus: z.boolean().optional(),
    })
    .strict() as SchemaType;
