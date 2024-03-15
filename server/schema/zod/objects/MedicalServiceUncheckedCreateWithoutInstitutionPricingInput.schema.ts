/* eslint-disable */
import { z } from 'zod';
import { BeneficiaryServiceUncheckedCreateNestedManyWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceUncheckedCreateNestedManyWithoutMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUncheckedCreateWithoutInstitutionPricingInput>;
export const MedicalServiceUncheckedCreateWithoutInstitutionPricingInputObjectSchema: SchemaType = z
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
        medicalCenterCode: z.string(),
        basePrice: z.number(),
        medicalCenterId: z.string(),
        categoryId: z.string(),
        beneficiaryServices: z
            .lazy(() => BeneficiaryServiceUncheckedCreateNestedManyWithoutMedicalServiceInputObjectSchema)
            .optional(),
    })
    .strict() as SchemaType;
