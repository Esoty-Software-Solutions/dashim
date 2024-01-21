import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateCreateManyMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateManyMedicalServiceTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateCreateManyMedicalServiceTemplateInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceTemplateCreateManyMedicalServiceTemplateInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              BenefitPackageMedicalServiceTemplateCreateManyMedicalServiceTemplateInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateCreateManyMedicalServiceTemplateInputEnvelopeObjectSchema =
  Schema;
