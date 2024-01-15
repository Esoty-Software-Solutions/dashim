import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateManyBenefitPackageInputEnvelopeObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateManyBenefitPackageInputEnvelope.schema';
import { BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateUncheckedCreateNestedManyWithoutBenefitPackageInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateCreateManyBenefitPackageInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateUncheckedCreateNestedManyWithoutBenefitPackageInputObjectSchema =
  Schema;
