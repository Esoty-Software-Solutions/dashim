import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateCreateManyBenefitPackageInputEnvelopeObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateManyBenefitPackageInputEnvelope.schema';
import { BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceTemplateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateUncheckedCreateNestedManyWithoutBenefitPackageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BenefitPackageMedicalServiceTemplateCreateManyBenefitPackageInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateUncheckedCreateNestedManyWithoutBenefitPackageInputObjectSchema =
  Schema;
