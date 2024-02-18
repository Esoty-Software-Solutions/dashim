import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutMedicalServiceCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutMedicalServiceCategoryInput> =
  z
    .object({
      where: z.lazy(
        () => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceCategoryUpdateWithoutMedicalServiceCategoryInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalServiceCategoryUncheckedUpdateWithoutMedicalServiceCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryUpdateWithWhereUniqueWithoutMedicalServiceCategoryInputObjectSchema =
  Schema;
