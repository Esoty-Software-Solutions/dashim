import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryBenefitPackageIdMedicalServiceCategoryIdCompoundUniqueInput> =
  z
    .object({
      benefitPackageId: z.string(),
      medicalServiceCategoryId: z.string(),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryBenefitPackageIdMedicalServiceCategoryIdCompoundUniqueInputObjectSchema =
  Schema;
