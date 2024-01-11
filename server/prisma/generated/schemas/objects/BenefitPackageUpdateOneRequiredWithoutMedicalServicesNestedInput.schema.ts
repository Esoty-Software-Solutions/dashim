import { z } from 'zod';
import { BenefitPackageCreateWithoutMedicalServicesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServicesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServicesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServicesInput.schema';
import { BenefitPackageCreateOrConnectWithoutMedicalServicesInputObjectSchema } from './BenefitPackageCreateOrConnectWithoutMedicalServicesInput.schema';
import { BenefitPackageUpsertWithoutMedicalServicesInputObjectSchema } from './BenefitPackageUpsertWithoutMedicalServicesInput.schema';
import { BenefitPackageWhereUniqueInputObjectSchema } from './BenefitPackageWhereUniqueInput.schema';
import { BenefitPackageUpdateWithoutMedicalServicesInputObjectSchema } from './BenefitPackageUpdateWithoutMedicalServicesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutMedicalServicesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutMedicalServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpdateOneRequiredWithoutMedicalServicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => BenefitPackageCreateWithoutMedicalServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedCreateWithoutMedicalServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            BenefitPackageCreateOrConnectWithoutMedicalServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => BenefitPackageUpsertWithoutMedicalServicesInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => BenefitPackageWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => BenefitPackageUpdateWithoutMedicalServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              BenefitPackageUncheckedUpdateWithoutMedicalServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const BenefitPackageUpdateOneRequiredWithoutMedicalServicesNestedInputObjectSchema =
  Schema;
