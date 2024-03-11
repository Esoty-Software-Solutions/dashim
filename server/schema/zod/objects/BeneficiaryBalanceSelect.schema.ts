/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryArgsObjectSchema } from './BeneficiaryArgs.schema';
import { BenefitPackageArgsObjectSchema } from './BenefitPackageArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BeneficiaryBalanceSelect>;
export const BeneficiaryBalanceSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        beneficiary: z.union([z.boolean(), z.lazy(() => BeneficiaryArgsObjectSchema)]).optional(),
        beneficiaryId: z.boolean().optional(),
        beneftiPackage: z.union([z.boolean(), z.lazy(() => BenefitPackageArgsObjectSchema)]).optional(),
        beneftiPackageId: z.boolean().optional(),
        balancePending: z.boolean().optional(),
        balanceActual: z.boolean().optional(),
    })
    .strict() as SchemaType;
