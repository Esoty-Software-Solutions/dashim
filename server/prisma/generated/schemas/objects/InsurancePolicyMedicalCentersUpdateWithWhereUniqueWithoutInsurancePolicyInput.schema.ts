import { z } from 'zod';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCentersWhereUniqueInput.schema';
import { InsurancePolicyMedicalCentersUpdateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersUpdateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedUpdateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersUpdateWithWhereUniqueWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(
        () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyMedicalCentersUpdateWithWhereUniqueWithoutInsurancePolicyInputObjectSchema =
  Schema;
