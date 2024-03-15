/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryInputSchema } from '../input/BenefitPackageMedicalServiceCategoryInput.schema';
import { InsurancePolicyArgsObjectSchema } from './InsurancePolicyArgs.schema';
import { BeneficiaryBalanceInputSchema } from '../input/BeneficiaryBalanceInput.schema';
import { BenefitPackageCountOutputTypeArgsObjectSchema } from './BenefitPackageCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageSelect>;
export const BenefitPackageSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        name: z.boolean().optional(),
        copayDistrubtion: z.boolean().optional(),
        threashold: z.boolean().optional(),
        medicalServiceCategories: z
            .union([z.boolean(), z.lazy(() => BenefitPackageMedicalServiceCategoryInputSchema.findMany)])
            .optional(),
        insurancePolicy: z.union([z.boolean(), z.lazy(() => InsurancePolicyArgsObjectSchema)]).optional(),
        insurancePolicyId: z.boolean().optional(),
        beneficiaryBalances: z.union([z.boolean(), z.lazy(() => BeneficiaryBalanceInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => BenefitPackageCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
