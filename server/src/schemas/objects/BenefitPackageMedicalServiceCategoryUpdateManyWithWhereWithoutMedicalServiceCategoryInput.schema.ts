import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryScalarWhereInputObjectSchema } from './BenefitPackageMedicalServiceCategoryScalarWhereInput.schema';
import { BenefitPackageMedicalServiceCategoryUpdateManyMutationInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUpdateManyMutationInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutBeneftiPackagesInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutBeneftiPackagesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutMedicalServiceCategoryInput> =
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
            BenefitPackageMedicalServiceCategoryUncheckedUpdateManyWithoutBeneftiPackagesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryUpdateManyWithWhereWithoutMedicalServiceCategoryInputObjectSchema =
  Schema;
