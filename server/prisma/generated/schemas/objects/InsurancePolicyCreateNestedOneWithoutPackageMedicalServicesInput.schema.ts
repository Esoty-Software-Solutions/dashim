import { z } from 'zod';
import { InsurancePolicyCreateWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyCreateWithoutPackageMedicalServicesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutPackageMedicalServicesInput.schema';
import { InsurancePolicyCreateOrConnectWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyCreateOrConnectWithoutPackageMedicalServicesInput.schema';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateNestedOneWithoutPackageMedicalServicesInput> =
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
      connect: z
        .lazy(() => InsurancePolicyWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const InsurancePolicyCreateNestedOneWithoutPackageMedicalServicesInputObjectSchema =
  Schema;
