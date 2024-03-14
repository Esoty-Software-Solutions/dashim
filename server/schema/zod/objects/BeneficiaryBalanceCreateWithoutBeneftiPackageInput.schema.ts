/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceCreateWithoutBeneftiPackageInput>;
export const BeneficiaryBalanceCreateWithoutBeneftiPackageInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        balancePending: z.number(),
        balanceActual: z.number(),
        beneficiary: z.lazy(() => BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema),
    })
    .strict() as SchemaType;
