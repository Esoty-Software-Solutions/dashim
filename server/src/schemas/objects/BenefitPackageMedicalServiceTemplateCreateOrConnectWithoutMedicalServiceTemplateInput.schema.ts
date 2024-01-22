import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceTemplateCreateWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateWithoutMedicalServiceTemplateInput.schema';
import { BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutMedicalServiceTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutMedicalServiceTemplateInput> =
  z
    .object({
      where: z.lazy(
        () => BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceTemplateCreateWithoutMedicalServiceTemplateInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutMedicalServiceTemplateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutMedicalServiceTemplateInputObjectSchema =
  Schema;
