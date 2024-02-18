import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutMedicalServiceCategoryInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutMedicalServiceCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutMedicalServiceCategoryInput> =
  z
    .object({
      where: z.lazy(
        () => BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            BenefitPackageMedicalServiceCategoryCreateWithoutMedicalServiceCategoryInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutMedicalServiceCategoryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutMedicalServiceCategoryInputObjectSchema =
  Schema;
