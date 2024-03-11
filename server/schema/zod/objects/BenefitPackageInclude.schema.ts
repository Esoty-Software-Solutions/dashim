/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryInputSchema } from '../input/BenefitPackageMedicalServiceCategoryInput.schema';
import { InsurancePolicyArgsObjectSchema } from './InsurancePolicyArgs.schema';
import { BeneficiaryBalanceInputSchema } from '../input/BeneficiaryBalanceInput.schema';
import { BenefitPackageCountOutputTypeArgsObjectSchema } from './BenefitPackageCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageInclude>;
export const BenefitPackageIncludeObjectSchema: SchemaType = z
    .object({
        medicalServiceCategories: z
            .union([z.boolean(), z.lazy(() => BenefitPackageMedicalServiceCategoryInputSchema.findMany)])
            .optional(),
        insurancePolicy: z.union([z.boolean(), z.lazy(() => InsurancePolicyArgsObjectSchema)]).optional(),
        beneficiaryBalances: z.union([z.boolean(), z.lazy(() => BeneficiaryBalanceInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => BenefitPackageCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
