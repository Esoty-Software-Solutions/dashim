import { z } from 'zod';
import { InsurancePolicyMedicalCenterScalarWhereInputObjectSchema } from './InsurancePolicyMedicalCenterScalarWhereInput.schema';
import { InsurancePolicyMedicalCenterUpdateManyMutationInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateManyMutationInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutMedicalCenterInput> =
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
            InsurancePolicyMedicalCenterUncheckedUpdateManyWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyMedicalCenterUpdateManyWithWhereWithoutMedicalCenterInputObjectSchema =
  Schema;
