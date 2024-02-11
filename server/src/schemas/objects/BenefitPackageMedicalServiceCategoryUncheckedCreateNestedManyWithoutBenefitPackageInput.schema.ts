import { z } from 'zod';
import { BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputEnvelopeObjectSchema } from './BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputEnvelope.schema';
import { BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceCategoryWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceCategoryUncheckedCreateNestedManyWithoutBenefitPackageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceCategoryCreateWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceCategoryUncheckedCreateWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceCategoryCreateOrConnectWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BenefitPackageMedicalServiceCategoryCreateManyBenefitPackageInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceCategoryWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceCategoryUncheckedCreateNestedManyWithoutBenefitPackageInputObjectSchema =
  Schema;
