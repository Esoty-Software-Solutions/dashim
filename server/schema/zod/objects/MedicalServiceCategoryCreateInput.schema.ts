/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryCreateNestedManyWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateNestedManyWithoutMedicalServiceCategoryInput.schema';
import { MedicalServiceCreateNestedManyWithoutCategoryInputObjectSchema } from './MedicalServiceCreateNestedManyWithoutCategoryInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCategoryCreateInput>;
export const MedicalServiceCategoryCreateInputObjectSchema: SchemaType = z
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
        dalilCode: z.string(),
        basePrice: z.string(),
        IsPriceVaried: z.boolean().optional(),
        description: z.string(),
        beneftiPackages: z
            .lazy(
                () =>
                    BenefitPackageMedicalServiceCategoryCreateNestedManyWithoutMedicalServiceCategoryInputObjectSchema,
            )
            .optional(),
        services: z.lazy(() => MedicalServiceCreateNestedManyWithoutCategoryInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
