/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageArgsObjectSchema } from './BenefitPackageArgs.schema';
import { MedicalServiceCategoryArgsObjectSchema } from './MedicalServiceCategoryArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategorySelect>;
export const BenefitPackageMedicalServiceCategorySelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        isActive: z.boolean().optional(),
        deactivationReason: z.boolean().optional(),
        deactivationDate: z.boolean().optional(),
        benefitPackage: z.union([z.boolean(), z.lazy(() => BenefitPackageArgsObjectSchema)]).optional(),
        benefitPackageId: z.boolean().optional(),
        medicalServiceCategory: z.union([z.boolean(), z.lazy(() => MedicalServiceCategoryArgsObjectSchema)]).optional(),
        medicalServiceCategoryId: z.boolean().optional(),
    })
    .strict() as SchemaType;
