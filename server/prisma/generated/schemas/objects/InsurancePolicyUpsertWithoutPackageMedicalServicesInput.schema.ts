import { z } from 'zod';
import { InsurancePolicyUpdateWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyUpdateWithoutPackageMedicalServicesInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutPackageMedicalServicesInput.schema';
import { InsurancePolicyCreateWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyCreateWithoutPackageMedicalServicesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutPackageMedicalServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpsertWithoutPackageMedicalServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            InsurancePolicyUpdateWithoutPackageMedicalServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyUncheckedUpdateWithoutPackageMedicalServicesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            InsurancePolicyCreateWithoutPackageMedicalServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyUncheckedCreateWithoutPackageMedicalServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyUpsertWithoutPackageMedicalServicesInputObjectSchema =
  Schema;
