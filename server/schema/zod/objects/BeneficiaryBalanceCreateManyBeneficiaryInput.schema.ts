/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceCreateManyBeneficiaryInput>;
export const BeneficiaryBalanceCreateManyBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        beneftiPackageId: z.string(),
        balancePending: z.number(),
        balanceActual: z.number(),
    })
    .strict() as SchemaType;
