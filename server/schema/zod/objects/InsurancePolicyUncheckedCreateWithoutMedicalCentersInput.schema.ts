/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryEntityUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './BeneficiaryEntityUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';
import { BenefitPackageUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema } from './BenefitPackageUncheckedCreateNestedManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.InsurancePolicyUncheckedCreateWithoutMedicalCentersInput>;
export const InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema: SchemaType = z
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
        institutionId: z.string(),
        beneficiaryEntities: z
            .lazy(() => BeneficiaryEntityUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema)
            .optional(),
        benefitPackages: z
            .lazy(() => BenefitPackageUncheckedCreateNestedManyWithoutInsurancePolicyInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
