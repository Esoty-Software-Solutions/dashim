import { z } from 'zod';
import { BenefitPackageUpdateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUpdateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpsertWithoutMedicalServiceCategoriesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            BenefitPackageUpdateWithoutMedicalServiceCategoriesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageUpsertWithoutMedicalServiceCategoriesInputObjectSchema =
  Schema;
