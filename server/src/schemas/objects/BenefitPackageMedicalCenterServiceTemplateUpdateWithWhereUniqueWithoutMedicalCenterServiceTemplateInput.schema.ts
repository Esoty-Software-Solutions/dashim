import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUpdateWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUpdateWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateWithoutMedicalCenterServiceTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateUpdateWithWhereUniqueWithoutMedicalCenterServiceTemplateInput> =
  z
    .object({
      where: z.lazy(
        () =>
          BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUpdateWithoutMedicalCenterServiceTemplateInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateWithoutMedicalCenterServiceTemplateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateUpdateWithWhereUniqueWithoutMedicalCenterServiceTemplateInputObjectSchema =
  Schema;
