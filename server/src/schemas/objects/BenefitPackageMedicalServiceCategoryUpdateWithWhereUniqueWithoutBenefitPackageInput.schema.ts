import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutBenefitPackageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutBenefitPackageInput> =
  z
    .object({
      where: z.lazy(
        () => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceCategoryUpdateWithoutBenefitPackageInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutBenefitPackageInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutBenefitPackageInputObjectSchema =
  Schema;
