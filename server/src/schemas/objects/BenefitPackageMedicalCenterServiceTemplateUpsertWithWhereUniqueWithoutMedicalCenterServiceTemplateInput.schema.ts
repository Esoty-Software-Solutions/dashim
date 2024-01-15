import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUpdateWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUpdateWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutMedicalCenterServiceTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateUpsertWithWhereUniqueWithoutMedicalCenterServiceTemplateInput> =
  z
    .object({
      where: z.lazy(
        () =>
          BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUpdateWithoutMedicalCenterServiceTemplateInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateWithoutMedicalCenterServiceTemplateInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateCreateWithoutMedicalCenterServiceTemplateInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutMedicalCenterServiceTemplateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateUpsertWithWhereUniqueWithoutMedicalCenterServiceTemplateInputObjectSchema =
  Schema;
