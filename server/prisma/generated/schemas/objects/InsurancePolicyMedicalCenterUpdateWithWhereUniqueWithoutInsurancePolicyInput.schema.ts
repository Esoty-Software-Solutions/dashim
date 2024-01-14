import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedUpdateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(
        () => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema =
  Schema;
