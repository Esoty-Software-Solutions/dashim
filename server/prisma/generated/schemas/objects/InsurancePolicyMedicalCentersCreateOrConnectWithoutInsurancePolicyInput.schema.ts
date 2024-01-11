import { z } from 'zod';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCentersWhereUniqueInput.schema';
import { InsurancePolicyMedicalCentersCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersCreateOrConnectWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(
        () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
      ),
      create: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersCreateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyMedicalCentersCreateOrConnectWithoutInsurancePolicyInputObjectSchema =
  Schema;
