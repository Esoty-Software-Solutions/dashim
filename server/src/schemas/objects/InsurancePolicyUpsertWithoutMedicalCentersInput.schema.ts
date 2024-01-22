import { z } from 'zod';
import { InsurancePolicyUpdateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUpdateWithoutMedicalCentersInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutMedicalCentersInput.schema';
import { InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyCreateWithoutMedicalCentersInput.schema';
import { InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutMedicalCentersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpsertWithoutMedicalCentersInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => InsurancePolicyUpdateWithoutMedicalCentersInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyUncheckedUpdateWithoutMedicalCentersInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyUpsertWithoutMedicalCentersInputObjectSchema =
  Schema;
