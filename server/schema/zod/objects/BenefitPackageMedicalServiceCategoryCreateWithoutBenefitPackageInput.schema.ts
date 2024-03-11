/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceCategoryCreateNestedOneWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateNestedOneWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInput>;
export const BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInputObjectSchema: SchemaType = z
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
        medicalServiceCategory: z.lazy(
            () => MedicalServiceCategoryCreateNestedOneWithoutBeneftiPackagesInputObjectSchema,
        ),
    })
    .strict() as SchemaType;
