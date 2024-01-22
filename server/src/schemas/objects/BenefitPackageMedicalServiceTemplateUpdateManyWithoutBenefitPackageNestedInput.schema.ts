import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateUpsertWithWhereUniqueWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUpsertWithWhereUniqueWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateCreateManyBenefitPackageInputEnvelopeObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateManyBenefitPackageInputEnvelope.schema';
import { BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceTemplateUpdateWithWhereUniqueWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUpdateWithWhereUniqueWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUpdateManyWithWhereWithoutBenefitPackageInput.schema';
import { BenefitPackageMedicalServiceTemplateScalarWhereInputObjectSchema } from './BenefitPackageMedicalServiceTemplateScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateUpdateManyWithoutBenefitPackageNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateUpsertWithWhereUniqueWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateUpsertWithWhereUniqueWithoutBenefitPackageInputObjectSchema,
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
      set: z
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
      disconnect: z
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
      delete: z
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
      update: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateUpdateWithWhereUniqueWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateUpdateWithWhereUniqueWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateUpdateManyWithWhereWithoutBenefitPackageInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateScalarWhereInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateScalarWhereInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const BenefitPackageMedicalServiceTemplateUpdateManyWithoutBenefitPackageNestedInputObjectSchema =
  Schema;
