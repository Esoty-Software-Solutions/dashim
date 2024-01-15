import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateCreateManyMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateManyMedicalCenterServiceTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateCreateManyMedicalCenterServiceTemplateInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateCreateManyMedicalCenterServiceTemplateInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateCreateManyMedicalCenterServiceTemplateInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateCreateManyMedicalCenterServiceTemplateInputEnvelopeObjectSchema =
  Schema;
