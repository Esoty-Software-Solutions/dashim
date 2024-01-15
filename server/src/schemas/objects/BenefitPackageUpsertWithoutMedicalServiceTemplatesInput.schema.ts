import { z } from 'zod';
import { BenefitPackageUpdateWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageUpdateWithoutMedicalServiceTemplatesInput.schema';
import { BenefitPackageUncheckedUpdateWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageUncheckedUpdateWithoutMedicalServiceTemplatesInput.schema';
import { BenefitPackageCreateWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageCreateWithoutMedicalServiceTemplatesInput.schema';
import { BenefitPackageUncheckedCreateWithoutMedicalServiceTemplatesInputObjectSchema } from './BenefitPackageUncheckedCreateWithoutMedicalServiceTemplatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageUpsertWithoutMedicalServiceTemplatesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            BenefitPackageUpdateWithoutMedicalServiceTemplatesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedUpdateWithoutMedicalServiceTemplatesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            BenefitPackageCreateWithoutMedicalServiceTemplatesInputObjectSchema,
        ),
        z.lazy(
          () =>
            BenefitPackageUncheckedCreateWithoutMedicalServiceTemplatesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const BenefitPackageUpsertWithoutMedicalServiceTemplatesInputObjectSchema =
  Schema;
