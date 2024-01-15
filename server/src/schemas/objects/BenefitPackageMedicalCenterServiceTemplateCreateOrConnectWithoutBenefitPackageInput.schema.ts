import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutBenefitPackageInput> =
  z
    .object({
      where: z.lazy(
        () =>
          BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutBenefitPackageInputObjectSchema =
  Schema;
