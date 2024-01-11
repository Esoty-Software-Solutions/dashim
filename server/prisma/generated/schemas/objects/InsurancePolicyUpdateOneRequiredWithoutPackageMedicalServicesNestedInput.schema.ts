import { z } from 'zod';
import { InsurancePolicyCreateWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyCreateWithoutPackageMedicalServicesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutPackageMedicalServicesInput.schema';
import { InsurancePolicyCreateOrConnectWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutPackageMedicalServicesInput.schema';
import { InsurancePolicyUpsertWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyUpsertWithoutPackageMedicalServicesInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyUpdateWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyUpdateWithoutPackageMedicalServicesInput.schema';
import { InsurancePolicyUncheckedUpdateWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyUncheckedUpdateWithoutPackageMedicalServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyUpdateOneRequiredWithoutPackageMedicalServicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyCreateWithoutPackageMedicalServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              InsurancePolicyUncheckedCreateWithoutPackageMedicalServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            InsurancePolicyCreateOrConnectWithoutPackageMedicalServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () =>
            InsurancePolicyUpsertWithoutPackageMedicalServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => InsurancePolicyWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              InsurancePolicyUpdateWithoutPackageMedicalServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              InsurancePolicyUncheckedUpdateWithoutPackageMedicalServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const InsurancePolicyUpdateOneRequiredWithoutPackageMedicalServicesNestedInputObjectSchema =
  Schema;
