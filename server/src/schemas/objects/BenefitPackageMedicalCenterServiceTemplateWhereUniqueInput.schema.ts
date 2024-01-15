import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateBenefitPackageIdMedicalCenterServiceTemplateIdCompoundUniqueInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateBenefitPackageIdMedicalCenterServiceTemplateIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateWhereUniqueInput> =
  z
    .object({
      id: z.string().optional(),
      benefitPackageId_medicalCenterServiceTemplateId: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateBenefitPackageIdMedicalCenterServiceTemplateIdCompoundUniqueInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema =
  Schema;
