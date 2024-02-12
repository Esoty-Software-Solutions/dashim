import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryScalarWhereInputObjectSchema } from './BenefitPackageMedicalServiceCategoryScalarWhereInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateManyMutationInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateManyMutationInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutMedicalServiceCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutBenefitPackageInput> =
  z
    .object({
      where: z.lazy(
        () => BenefitPackageMedicalServiceCategoryScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceCategoryUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutMedicalServiceCategoriesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema =
  Schema;
