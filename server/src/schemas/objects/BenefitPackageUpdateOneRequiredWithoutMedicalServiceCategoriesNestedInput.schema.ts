import { z } from 'zod';
import { BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUpsertWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUpsertWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageUpdateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUpdateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpdateOneRequiredWithoutMedicalServiceCategoriesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            BenefitPackageUpsertWithoutMedicalServiceCategoriesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => BenefitPackageWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BenefitPackageUpdateWithoutMedicalServiceCategoriesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedUpdateWithoutMedicalServiceCategoriesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BenefitPackageUpdateOneRequiredWithoutMedicalServiceCategoriesNestedInputObjectSchema =
  Schema;
