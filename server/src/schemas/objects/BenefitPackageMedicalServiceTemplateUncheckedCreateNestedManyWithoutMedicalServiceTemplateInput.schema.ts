import { z } from 'zod';
import { BenefitPackageMedicalServiceTemplateCreateWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateWithoutMedicalServiceTemplateInput.schema';
import { BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateUncheckedCreateWithoutMedicalServiceTemplateInput.schema';
import { BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutMedicalServiceTemplateInputObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateOrConnectWithoutMedicalServiceTemplateInput.schema';
import { BenefitPackageMedicalServiceTemplateCreateManyMedicalServiceTemplateInputEnvelopeObjectSchema } from './BenefitPackageMedicalServiceTemplateCreateManyMedicalServiceTemplateInputEnvelope.schema';
import { BenefitPackageMedicalServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalServiceTemplateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalServiceTemplateUncheckedCreateNestedManyWithoutMedicalServiceTemplateInput> =
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
      createMany: z
        .lazy(
          () =>
            BenefitPackageMedicalServiceTemplateCreateManyMedicalServiceTemplateInputEnvelopeObjectSchema,
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

export const BenefitPackageMedicalServiceTemplateUncheckedCreateNestedManyWithoutMedicalServiceTemplateInputObjectSchema =
  Schema;
