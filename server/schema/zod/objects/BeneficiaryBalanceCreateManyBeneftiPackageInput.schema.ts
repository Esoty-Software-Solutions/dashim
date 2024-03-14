/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceCreateManyBeneftiPackageInput>;
export const BeneficiaryBalanceCreateManyBeneftiPackageInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        beneficiaryId: z.string(),
        balancePending: z.number(),
        balanceActual: z.number(),
    })
    .strict() as SchemaType;
