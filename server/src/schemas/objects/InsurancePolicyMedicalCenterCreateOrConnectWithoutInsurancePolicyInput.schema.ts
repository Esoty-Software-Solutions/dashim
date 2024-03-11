import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterCreateOrConnectWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(
        () => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterCreateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyMedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema =
  Schema;
