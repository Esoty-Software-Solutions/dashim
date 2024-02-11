import { z } from 'zod';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServiceCategoriesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServiceCategoriesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInput> =
  z
    .object({
      where: z.lazy(() => BenefitPackageWhereUniqueInputObjectSchema),
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

export const BenefitPackageCreateOrConnectWithoutMedicalServiceCategoriesInputObjectSchema =
  Schema;
