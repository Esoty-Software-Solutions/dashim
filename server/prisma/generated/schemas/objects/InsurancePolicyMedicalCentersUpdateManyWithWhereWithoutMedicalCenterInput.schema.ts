import { z } from 'zod';
import { InsurancePolicyMedicalCentersScalarWhereInputObjectSchema } from './InsurancePolicyMedicalCentersScalarWhereInput.schema';
import { InsurancePolicyMedicalCentersUpdateManyMutationInputObjectSchema } from './InsurancePolicyMedicalCentersUpdateManyMutationInput.schema';
import { InsurancePolicyMedicalCentersUncheckedUpdateManyWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedUpdateManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersUpdateManyWithWhereWithoutMedicalCenterInput> =
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
            InsurancePolicyMedicalCentersUncheckedUpdateManyWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyMedicalCentersUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema =
  Schema;
