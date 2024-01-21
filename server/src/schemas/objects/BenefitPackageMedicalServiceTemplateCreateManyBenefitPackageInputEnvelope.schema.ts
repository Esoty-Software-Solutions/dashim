import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateCreateManyBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateManyBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateCreateManyBenefitPackageInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceTemplateCreateManyBenefitPackageInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              BenefitPackageMedicalServiceTemplateCreateManyBenefitPackageInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateCreateManyBenefitPackageInputEnvelopeObjectSchema =
  Schema;
