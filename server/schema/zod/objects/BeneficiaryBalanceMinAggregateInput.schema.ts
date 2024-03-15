/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceMinAggregateInputType>;
export const BeneficiaryBalanceMinAggregateInputObjectSchema: SchemaType = z
    .object({
        id: z.literal(true).optional(),
        createdAt: z.literal(true).optional(),
        updatedAt: z.literal(true).optional(),
        isPublished: z.literal(true).optional(),
        isSoftDeleted: z.literal(true).optional(),
        beneficiaryId: z.literal(true).optional(),
        beneftiPackageId: z.literal(true).optional(),
        balancePending: z.literal(true).optional(),
        balanceActual: z.literal(true).optional(),
    })
    .strict() as SchemaType;
