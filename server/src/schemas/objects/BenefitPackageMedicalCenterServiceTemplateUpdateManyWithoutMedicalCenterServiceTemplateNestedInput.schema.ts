import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateCreateWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUpsertWithWhereUniqueWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUpsertWithWhereUniqueWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateManyMedicalCenterServiceTemplateInputEnvelopeObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateManyMedicalCenterServiceTemplateInputEnvelope.schema';
import { BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUpdateWithWhereUniqueWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUpdateWithWhereUniqueWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUpdateManyWithWhereWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUpdateManyWithWhereWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateScalarWhereInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateUpdateManyWithoutMedicalCenterServiceTemplateNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateCreateWithoutMedicalCenterServiceTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateCreateWithoutMedicalCenterServiceTemplateInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutMedicalCenterServiceTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutMedicalCenterServiceTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutMedicalCenterServiceTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutMedicalCenterServiceTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateUpsertWithWhereUniqueWithoutMedicalCenterServiceTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateUpsertWithWhereUniqueWithoutMedicalCenterServiceTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateCreateManyMedicalCenterServiceTemplateInputEnvelopeObjectSchema,
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
              BenefitPackageMedicalCenterServiceTemplateUpdateWithWhereUniqueWithoutMedicalCenterServiceTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateUpdateWithWhereUniqueWithoutMedicalCenterServiceTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalCenterServiceTemplateUpdateManyWithWhereWithoutMedicalCenterServiceTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalCenterServiceTemplateUpdateManyWithWhereWithoutMedicalCenterServiceTemplateInputObjectSchema,
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

export const BenefitPackageMedicalCenterServiceTemplateUpdateManyWithoutMedicalCenterServiceTemplateNestedInputObjectSchema =
  Schema;
