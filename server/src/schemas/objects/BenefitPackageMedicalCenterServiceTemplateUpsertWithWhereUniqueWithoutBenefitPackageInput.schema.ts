import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUpdateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUpdateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateUpsertWithWhereUniqueWithoutBenefitPackageInput> =
  z
    .object({
      where: z.lazy(
        () =>
          BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUpdateWithoutBenefitPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateUncheckedUpdateWithoutBenefitPackageInputObjectSchema,
        ),
      ]),
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

export const BenefitPackageMedicalCenterServiceTemplateUpsertWithWhereUniqueWithoutBenefitPackageInputObjectSchema =
  Schema;
