import { z } from 'zod';
import { BenefitPackageMedicalCenterServiceTemplateCreateWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateUncheckedCreateWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutMedicalCenterServiceTemplateInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateOrConnectWithoutMedicalCenterServiceTemplateInput.schema';
import { BenefitPackageMedicalCenterServiceTemplateCreateManyMedicalCenterServiceTemplateInputEnvelopeObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateCreateManyMedicalCenterServiceTemplateInputEnvelope.schema';
import { BenefitPackageMedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './BenefitPackageMedicalCenterServiceTemplateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageMedicalCenterServiceTemplateUncheckedCreateNestedManyWithoutMedicalCenterServiceTemplateInput> =
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
      createMany: z
        .lazy(
          () =>
            BenefitPackageMedicalCenterServiceTemplateCreateManyMedicalCenterServiceTemplateInputEnvelopeObjectSchema,
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

export const BenefitPackageMedicalCenterServiceTemplateUncheckedCreateNestedManyWithoutMedicalCenterServiceTemplateInputObjectSchema =
  Schema;
