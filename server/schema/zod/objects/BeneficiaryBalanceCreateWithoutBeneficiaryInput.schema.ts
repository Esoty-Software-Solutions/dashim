/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceCreateWithoutBeneficiaryInput>;
export const BeneficiaryBalanceCreateWithoutBeneficiaryInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        balancePending: z.number(),
        balanceActual: z.number(),
        beneftiPackage: z.lazy(() => BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema),
    })
    .strict() as SchemaType;
