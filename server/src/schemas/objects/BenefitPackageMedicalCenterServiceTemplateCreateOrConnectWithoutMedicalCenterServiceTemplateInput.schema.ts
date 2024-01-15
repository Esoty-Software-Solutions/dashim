import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutMedicalCenterServiceTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutMedicalCenterServiceTemplateInput> =
  z
    .object({
      where: z.lazy(
        () =>
          BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
      ),
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

export const BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutMedicalCenterServiceTemplateInputObjectSchema =
  Schema;
