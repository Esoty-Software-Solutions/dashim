import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateWhereInputObjectSchema } from './BenefitPackageMedicalServiceTemplateWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateListRelationFilter> =
  z
    .object({
      every: z
        .lazy(() => BenefitPackageMedicalServiceTemplateWhereInputObjectSchema)
        .optional(),
      some: z
        .lazy(() => BenefitPackageMedicalServiceTemplateWhereInputObjectSchema)
        .optional(),
      none: z
        .lazy(() => BenefitPackageMedicalServiceTemplateWhereInputObjectSchema)
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateListRelationFilterObjectSchema =
  Schema;
