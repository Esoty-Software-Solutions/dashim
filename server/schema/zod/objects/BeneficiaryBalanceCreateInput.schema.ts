/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema } from './BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInput.schema';
import { BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceCreateInput>;
export const BeneficiaryBalanceCreateInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        balancePending: z.number(),
        balanceActual: z.number(),
        beneficiary: z.lazy(() => BeneficiaryCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema),
        beneftiPackage: z.lazy(() => BenefitPackageCreateNestedOneWithoutBeneficiaryBalancesInputObjectSchema),
    })
    .strict() as SchemaType;
