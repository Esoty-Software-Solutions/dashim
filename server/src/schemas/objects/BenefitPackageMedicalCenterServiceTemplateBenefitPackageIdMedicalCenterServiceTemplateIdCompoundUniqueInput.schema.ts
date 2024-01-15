import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateBenefitPackageIdMedicalCenterServiceTemplateIdCompoundUniqueInput> =
  z
    .object({
      benefitPackageId: z.string(),
      medicalCenterServiceTemplateId: z.string(),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateBenefitPackageIdMedicalCenterServiceTemplateIdCompoundUniqueInputObjectSchema =
  Schema;
