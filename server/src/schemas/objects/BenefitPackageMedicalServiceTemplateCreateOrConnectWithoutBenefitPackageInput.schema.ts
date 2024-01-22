import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutBenefitPackageInput> =
  z
    .object({
      where: z.lazy(
        () => BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutBenefitPackageInputObjectSchema =
  Schema;
