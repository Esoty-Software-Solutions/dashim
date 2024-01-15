import { z } from 'zod';
import { BenefitPackageCreateWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServiceTemplatesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServiceTemplatesInput.schema';
import { BenefitPackageCreateOrConnectWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutMedicalServiceTemplatesInput.schema';
import { BenefitPackageUpsertWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageUpsertWithoutMedicalServiceTemplatesInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageUpdateWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageUpdateWithoutMedicalServiceTemplatesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutMedicalServiceTemplatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpdateOneRequiredWithoutMedicalServiceTemplatesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              BenefitPackageCreateWithoutMedicalServiceTemplatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedCreateWithoutMedicalServiceTemplatesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BenefitPackageCreateOrConnectWithoutMedicalServiceTemplatesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            BenefitPackageUpsertWithoutMedicalServiceTemplatesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => BenefitPackageWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              BenefitPackageUpdateWithoutMedicalServiceTemplatesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedUpdateWithoutMedicalServiceTemplatesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BenefitPackageUpdateOneRequiredWithoutMedicalServiceTemplatesNestedInputObjectSchema =
  Schema;
