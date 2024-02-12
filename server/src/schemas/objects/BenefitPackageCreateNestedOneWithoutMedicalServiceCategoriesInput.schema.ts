import { z } from 'zod';
import { BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateNestedOneWithoutMedicalServiceCategoriesInput> =
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
      connect: z
        .lazy(() => BenefitPackageWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const BenefitPackageCreateNestedOneWithoutMedicalServiceCategoriesInputObjectSchema =
  Schema;
