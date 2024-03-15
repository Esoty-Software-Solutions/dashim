/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterCreateNestedOneWithoutServicesInputObjectSchema } from './MedicalCenterCreateNestedOneWithoutServicesInput.schema';
import { BeneficiaryServiceCreateNestedManyWithoutMedicalServiceInputObjectSchema } from './BeneficiaryServiceCreateNestedManyWithoutMedicalServiceInput.schema';
import { InstitutionMedicalServiceCreateNestedManyWithoutMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceCreateNestedManyWithoutMedicalServiceInput.schema';
import { MedicalServiceCategoryCreateNestedOneWithoutServicesInputObjectSchema } from './MedicalServiceCategoryCreateNestedOneWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCreateInput>;
export const MedicalServiceCreateInputObjectSchema: SchemaType = z
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
        medicalCenter: z.lazy(() => MedicalCenterCreateNestedOneWithoutServicesInputObjectSchema),
        beneficiaryServices: z
            .lazy(() => BeneficiaryServiceCreateNestedManyWithoutMedicalServiceInputObjectSchema)
            .optional(),
        institutionPricing: z
            .lazy(() => InstitutionMedicalServiceCreateNestedManyWithoutMedicalServiceInputObjectSchema)
            .optional(),
        category: z.lazy(() => MedicalServiceCategoryCreateNestedOneWithoutServicesInputObjectSchema),
    })
    .strict() as SchemaType;
