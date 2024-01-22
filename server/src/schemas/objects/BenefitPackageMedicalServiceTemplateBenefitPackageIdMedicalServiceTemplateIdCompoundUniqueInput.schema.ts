import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateBenefitPackageIdMedicalServiceTemplateIdCompoundUniqueInput> =
  z
    .object({
      benefitPackageId: z.string(),
      medicalServiceTemplateId: z.string(),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateBenefitPackageIdMedicalServiceTemplateIdCompoundUniqueInputObjectSchema =
  Schema;
