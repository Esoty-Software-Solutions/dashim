import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryCreateManyMedicalServiceCategoryInputEnvelopeObjectSchema =
  Schema;
