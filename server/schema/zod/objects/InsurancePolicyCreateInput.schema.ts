/* eslint-disable */
import { z } from 'zod';
import { InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema } from './InstitutionCreateNestedOneWithoutPoliciesInput.schema';
import { BeneficiaryEntityCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityCreateNestedManyWithoutInsurancePolicyInput.schema';
import { BenefitPackageCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageCreateNestedManyWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterCreateNestedManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyCreateInput>;
export const InsurancePolicyCreateInputObjectSchema: SchemaType = z
    .object({
        id: z.string(),
        createdAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        updatedAt: z.union([z.date().optional(), z.string().datetime().optional()]),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.union([z.string(), z.null()]).optional().nullable(),
        deactivationDate: z
            .union([z.union([z.date(), z.string().datetime().optional()]), z.null()])
            .optional()
            .nullable(),
        name: z.string(),
        Accumulatedlimit: z.number(),
        BalanceResetDate: z.union([z.date(), z.string().datetime()]),
        issueDate: z.union([z.date(), z.string().datetime()]),
        renewalDate: z.union([z.date(), z.string().datetime()]),
        serviceEntryTimeWindow: z.number().optional(),
        institution: z.lazy(() => InstitutionCreateNestedOneWithoutPoliciesInputObjectSchema),
        beneficiaryEntities: z
            .lazy(() => BeneficiaryEntityCreateNestedManyWithoutInsurancePolicyInputObjectSchema)
            .optional(),
        benefitPackages: z.lazy(() => BenefitPackageCreateNestedManyWithoutInsurancePolicyInputObjectSchema).optional(),
        medicalCenters: z
            .lazy(() => InsurancePolicyMedicalCenterCreateNestedManyWithoutInsurancePolicyInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
