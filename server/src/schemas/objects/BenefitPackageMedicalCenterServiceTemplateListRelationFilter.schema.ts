import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateWhereInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateListRelationFilter> =
  z
    .object({
      every: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateWhereInputObjectSchema,
        )
        .optional(),
      some: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateWhereInputObjectSchema,
        )
        .optional(),
      none: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateWhereInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateListRelationFilterObjectSchema =
  Schema;
