/* eslint-disable */
import { z } from 'zod';
import { BenefitPackageArgsObjectSchema } from './BenefitPackageArgs.schema';
import { MedicalServiceCategoryArgsObjectSchema } from './MedicalServiceCategoryArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryInclude>;
export const BenefitPackageMedicalServiceCategoryIncludeObjectSchema: SchemaType = z
    .object({
        benefitPackage: z.union([z.boolean(), z.lazy(() => BenefitPackageArgsObjectSchema)]).optional(),
        medicalServiceCategory: z.union([z.boolean(), z.lazy(() => MedicalServiceCategoryArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
