/* eslint-disable */
import { z } from 'zod';
import { InstitutionArgsObjectSchema } from './InstitutionArgs.schema';
import { BeneficiaryEntityInputSchema } from '../input/BeneficiaryEntityInput.schema';
import { BenefitPackageInputSchema } from '../input/BenefitPackageInput.schema';
import { InsurancePolicyMedicalCenterInputSchema } from '../input/InsurancePolicyMedicalCenterInput.schema';
import { InsurancePolicyCountOutputTypeArgsObjectSchema } from './InsurancePolicyCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyInclude>;
export const InsurancePolicyIncludeObjectSchema: SchemaType = z
    .object({
        institution: z.union([z.boolean(), z.lazy(() => InstitutionArgsObjectSchema)]).optional(),
        beneficiaryEntities: z.union([z.boolean(), z.lazy(() => BeneficiaryEntityInputSchema.findMany)]).optional(),
        benefitPackages: z.union([z.boolean(), z.lazy(() => BenefitPackageInputSchema.findMany)]).optional(),
        medicalCenters: z
            .union([z.boolean(), z.lazy(() => InsurancePolicyMedicalCenterInputSchema.findMany)])
            .optional(),
        _count: z.union([z.boolean(), z.lazy(() => InsurancePolicyCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
