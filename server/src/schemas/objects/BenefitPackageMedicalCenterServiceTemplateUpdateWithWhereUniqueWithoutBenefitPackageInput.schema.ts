import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUpdateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUpdateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateWithoutBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateUpdateWithWhereUniqueWithoutBenefitPackageInput> =
  z
    .object({
      where: z.lazy(
        () =>
          BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUpdateWithoutBenefitPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateWithoutBenefitPackageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateUpdateWithWhereUniqueWithoutBenefitPackageInputObjectSchema =
  Schema;
