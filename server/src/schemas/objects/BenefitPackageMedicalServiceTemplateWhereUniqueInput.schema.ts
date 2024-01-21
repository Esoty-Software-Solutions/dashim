import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateBenefitPackageIdMedicalServiceTemplateIdCompoundUniqueInputObjectSchema } from './BenefitPackageMedicalServiceTemplateBenefitPackageIdMedicalServiceTemplateIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateWhereUniqueInput> =
  z
    .object({
      id: z.string().optional(),
      benefitPackageId_medicalServiceTemplateId: z
        .lazy(
          () =>
            BenefitPackageMedicalServiceTemplateBenefitPackageIdMedicalServiceTemplateIdCompoundUniqueInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema =
  Schema;
