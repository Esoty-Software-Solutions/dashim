import { z } from 'zod';
import { InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyCreateWithoutMedicalCentersInput.schema';
import { InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutMedicalCentersInput.schema';
import { InsurancePolicyCreateOrConnectWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutMedicalCentersInput.schema';
import { InsurancePolicyUpsertWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUpsertWithoutMedicalCentersInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyUpdateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUpdateWithoutMedicalCentersInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutMedicalCentersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpdateOneRequiredWithoutMedicalCentersNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => InsurancePolicyCreateWithoutMedicalCentersInputObjectSchema,
          ),
          z.lazy(
            () =>
              InsurancePolicyUncheckedCreateWithoutMedicalCentersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            InsurancePolicyCreateOrConnectWithoutMedicalCentersInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => InsurancePolicyUpsertWithoutMedicalCentersInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => InsurancePolicyWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => InsurancePolicyUpdateWithoutMedicalCentersInputObjectSchema,
          ),
          z.lazy(
            () =>
              InsurancePolicyUncheckedUpdateWithoutMedicalCentersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const InsurancePolicyUpdateOneRequiredWithoutMedicalCentersNestedInputObjectSchema =
  Schema;
