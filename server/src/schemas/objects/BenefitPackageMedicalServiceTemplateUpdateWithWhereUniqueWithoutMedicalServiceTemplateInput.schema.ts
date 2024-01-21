import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceTemplateUpdateWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUpdateWithoutMedicalServiceTemplateInput.schema';
import { BenefitPackageMedicalServiceTemplateUncheckedUpdateWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUncheckedUpdateWithoutMedicalServiceTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateUpdateWithWhereUniqueWithoutMedicalServiceTemplateInput> =
  z
    .object({
      where: z.lazy(
        () => BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceTemplateUpdateWithoutMedicalServiceTemplateInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalServiceTemplateUncheckedUpdateWithoutMedicalServiceTemplateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateUpdateWithWhereUniqueWithoutMedicalServiceTemplateInputObjectSchema =
  Schema;
