import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputEnvelopeObjectSchema =
  Schema;
