/* eslint-disable */
import { z } from 'zod';
import { InstitutionArgsObjectSchema } from './InstitutionArgs.schema';
import { BeneficiaryEntityInputSchema } from '../input/BeneficiaryEntityInput.schema';
import { BenefitPackageInputSchema } from '../input/BenefitPackageInput.schema';
import { InsurancePolicyMedicalCenterInputSchema } from '../input/InsurancePolicyMedicalCenterInput.schema';
import { InsurancePolicyCountOutputTypeArgsObjectSchema } from './InsurancePolicyCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicySelect>;
export const InsurancePolicySelectObjectSchema: SchemaType = z
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
        Accumulatedlimit: z.boolean().optional(),
        BalanceResetDate: z.boolean().optional(),
        issueDate: z.boolean().optional(),
        renewalDate: z.boolean().optional(),
        serviceEntryTimeWindow: z.boolean().optional(),
        institution: z.union([z.boolean(), z.lazy(() => InstitutionArgsObjectSchema)]).optional(),
        institutionId: z.boolean().optional(),
        beneficiaryEntities: z.union([z.boolean(), z.lazy(() => BeneficiaryEntityInputSchema.findMany)]).optional(),
        benefitPackages: z.union([z.boolean(), z.lazy(() => BenefitPackageInputSchema.findMany)]).optional(),
        medicalCenters: z
            .union([z.boolean(), z.lazy(() => InsurancePolicyMedicalCenterInputSchema.findMany)])
            .optional(),
        _count: z.union([z.boolean(), z.lazy(() => InsurancePolicyCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
