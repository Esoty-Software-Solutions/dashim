import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUpsertWithWhereUniqueWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUpsertWithWhereUniqueWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateManyBenefitPackageInputEnvelopeObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateManyBenefitPackageInputEnvelope.schema';
import { BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUpdateWithWhereUniqueWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUpdateWithWhereUniqueWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUpdateManyWithWhereWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateUpdateManyWithoutBenefitPackageNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateUpsertWithWhereUniqueWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateUpsertWithWhereUniqueWithoutBenefitPackageInputObjectSchema,
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
      set: z
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
      disconnect: z
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
      delete: z
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
      update: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateUpdateWithWhereUniqueWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateUpdateWithWhereUniqueWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalCenterServiceTemplateUpdateManyWithoutBenefitPackageNestedInputObjectSchema =
  Schema;
