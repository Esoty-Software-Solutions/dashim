import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryWhereInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryListRelationFilter> =
  z
    .object({
      every: z
        .lazy(() => BenefitPackageMedicalServiceCategoryWhereInputObjectSchema)
        .optional(),
      some: z
        .lazy(() => BenefitPackageMedicalServiceCategoryWhereInputObjectSchema)
        .optional(),
      none: z
        .lazy(() => BenefitPackageMedicalServiceCategoryWhereInputObjectSchema)
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryListRelationFilterObjectSchema =
  Schema;
