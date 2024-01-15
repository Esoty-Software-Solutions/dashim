import { z } from 'zod';
import { InsurancePolicyMedicalCenterScalarWhereInputObjectSchema } from './InsurancePolicyMedicalCenterScalarWhereInput.schema';
import { InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateManyMutationInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutMedicalCentersInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutMedicalCentersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(
        () => InsurancePolicyMedicalCenterScalarWhereInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () => InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutMedicalCentersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutInsurancePolicyInputObjectSchema =
  Schema;
