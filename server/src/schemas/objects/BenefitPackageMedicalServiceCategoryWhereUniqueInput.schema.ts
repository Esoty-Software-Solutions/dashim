import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryBenefitPackageIdMedicalServiceCategoryIdCompoundUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryBenefitPackageIdMedicalServiceCategoryIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryWhereUniqueInput> =
  z
    .object({
      id: z.string().optional(),
      benefitPackageId_medicalServiceCategoryId: z
        .lazy(
          () =>
            BenefitPackageMedicalServiceCategoryBenefitPackageIdMedicalServiceCategoryIdCompoundUniqueInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema =
  Schema;
