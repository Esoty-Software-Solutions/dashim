/* eslint-disable */
import { z } from 'zod';

import type { Prisma } from '@prisma/client';

type SchemaType =
    z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryBenefitPackageIdMedicalServiceCategoryIdCompoundUniqueInput>;
export const BenefitPackageMedicalServiceCategoryBenefitPackageIdMedicalServiceCategoryIdCompoundUniqueInputObjectSchema: SchemaType =
    z
        .object({
            benefitPackageId: z.string(),
            medicalServiceCategoryId: z.string(),
        })
        .strict() as SchemaType;
