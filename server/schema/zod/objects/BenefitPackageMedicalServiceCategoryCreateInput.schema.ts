/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageCreateNestedOneWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateNestedOneWithoutMedicalServiceCategoriesInput.schema';
import { MedicalServiceCategoryCreateNestedOneWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceCategoryCreateNestedOneWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCreateInput>;
export const BenefitPackageMedicalServiceCategoryCreateInputObjectSchema: SchemaType = z
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
        benefitPackage: z.lazy(() => BenefitPackageCreateNestedOneWithoutMedicalServiceCategoriesInputObjectSchema),
        medicalServiceCategory: z.lazy(
            () => MedicalServiceCategoryCreateNestedOneWithoutBeneftiPackagesInputObjectSchema,
        ),
    })
    .strict() as SchemaType;
