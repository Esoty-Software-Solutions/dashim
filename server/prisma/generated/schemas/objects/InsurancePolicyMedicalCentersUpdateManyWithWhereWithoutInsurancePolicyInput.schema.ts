import { z } from 'zod';
import { InsurancePolicyMedicalCentersScalarWhereInputObjectSchema } from './InsurancePolicyMedicalCentersScalarWhereInput.schema';
import { InsurancePolicyMedicalCentersUpdateManyMutationInputObjectSchema } from './InsurancePolicyMedicalCentersUpdateManyMutationInput.schema';
import { InsurancePolicyMedicalCentersUncheckedUpdateManyWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedUpdateManyWithoutMedicalCentersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersUpdateManyWithWhereWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(
        () => InsurancePolicyMedicalCentersScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersUncheckedUpdateManyWithoutMedicalCentersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyMedicalCentersUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema =
  Schema;
