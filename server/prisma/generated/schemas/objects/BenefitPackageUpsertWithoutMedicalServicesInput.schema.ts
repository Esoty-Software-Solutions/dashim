import { z } from 'zod';
import { BenefitPackageUpdateWithoutMedicalServicesInputObjectSchema } from './BenefitPackageUpdateWithoutMedicalServicesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutMedicalServicesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutMedicalServicesInput.schema';
import { BenefitPackageCreateWithoutMedicalServicesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServicesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServicesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpsertWithoutMedicalServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => BenefitPackageUpdateWithoutMedicalServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedUpdateWithoutMedicalServicesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => BenefitPackageCreateWithoutMedicalServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedCreateWithoutMedicalServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageUpsertWithoutMedicalServicesInputObjectSchema =
  Schema;
