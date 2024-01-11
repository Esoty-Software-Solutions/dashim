import { z } from 'zod';
import { InsurancePolicyWhereUniqueInputObjectSchema } from './InsurancePolicyWhereUniqueInput.schema';
import { InsurancePolicyCreateWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyCreateWithoutPackageMedicalServicesInput.schema';
import { InsurancePolicyUncheckedCreateWithoutPackageMedicalServicesInputObjectSchema } from './InsurancePolicyUncheckedCreateWithoutPackageMedicalServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyCreateOrConnectWithoutPackageMedicalServicesInput> =
  z
    .object({
      where: z.lazy(() => InsurancePolicyWhereUniqueInputObjectSchema),
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

export const InsurancePolicyCreateOrConnectWithoutPackageMedicalServicesInputObjectSchema =
  Schema;
