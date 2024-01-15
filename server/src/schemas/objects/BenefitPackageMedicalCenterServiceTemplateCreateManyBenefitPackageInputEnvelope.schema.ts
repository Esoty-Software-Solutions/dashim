import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateCreateManyBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateManyBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateCreateManyBenefitPackageInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateCreateManyBenefitPackageInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateCreateManyBenefitPackageInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateCreateManyBenefitPackageInputEnvelopeObjectSchema =
  Schema;
