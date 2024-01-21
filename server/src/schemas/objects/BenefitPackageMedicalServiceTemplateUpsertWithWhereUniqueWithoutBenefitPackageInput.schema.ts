import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceTemplateUpdateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUpdateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateUncheckedUpdateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUncheckedUpdateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateUpsertWithWhereUniqueWithoutBenefitPackageInput> =
  z
    .object({
      where: z.lazy(
        () => BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceTemplateUpdateWithoutBenefitPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalServiceTemplateUncheckedUpdateWithoutBenefitPackageInputObjectSchema,
        ),
      ]),
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

export const BenefitPackageMedicalServiceTemplateUpsertWithWhereUniqueWithoutBenefitPackageInputObjectSchema =
  Schema;
