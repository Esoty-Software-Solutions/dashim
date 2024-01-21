import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateCreateWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateWithoutMedicalServiceTemplateInput.schema';
import { BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutMedicalServiceTemplateInput.schema';
import { BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutMedicalServiceTemplateInput.schema';
import { BenefitPackageMedicalServiceTemplateUpsertWithWhereUniqueWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUpsertWithWhereUniqueWithoutMedicalServiceTemplateInput.schema';
import { BenefitPackageMedicalServiceTemplateCreateManyMedicalServiceTemplateInputEnvelopeObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateManyMedicalServiceTemplateInputEnvelope.schema';
import { BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceTemplateWhereUniqueInput.schema';
import { BenefitPackageMedicalServiceTemplateUpdateWithWhereUniqueWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUpdateWithWhereUniqueWithoutMedicalServiceTemplateInput.schema';
import { BenefitPackageMedicalServiceTemplateUpdateManyWithWhereWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUpdateManyWithWhereWithoutMedicalServiceTemplateInput.schema';
import { BenefitPackageMedicalServiceTemplateScalarWhereInputObjectSchema } from './BenefitPackageMedicalServiceTemplateScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateUpdateManyWithoutMedicalServiceTemplateNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateCreateWithoutMedicalServiceTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateCreateWithoutMedicalServiceTemplateInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutMedicalServiceTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutMedicalServiceTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutMedicalServiceTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutMedicalServiceTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateUpsertWithWhereUniqueWithoutMedicalServiceTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateUpsertWithWhereUniqueWithoutMedicalServiceTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            BenefitPackageMedicalServiceTemplateCreateManyMedicalServiceTemplateInputEnvelopeObjectSchema,
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
              BenefitPackageMedicalServiceTemplateUpdateWithWhereUniqueWithoutMedicalServiceTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateUpdateWithWhereUniqueWithoutMedicalServiceTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              BenefitPackageMedicalServiceTemplateUpdateManyWithWhereWithoutMedicalServiceTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                BenefitPackageMedicalServiceTemplateUpdateManyWithWhereWithoutMedicalServiceTemplateInputObjectSchema,
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

export const BenefitPackageMedicalServiceTemplateUpdateManyWithoutMedicalServiceTemplateNestedInputObjectSchema =
  Schema;
