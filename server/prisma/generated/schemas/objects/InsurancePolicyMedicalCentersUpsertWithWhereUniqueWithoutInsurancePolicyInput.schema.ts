import { z } from 'zod';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCentersWhereUniqueInput.schema';
import { InsurancePolicyMedicalCentersUpdateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersUpdateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedUpdateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersCreateWithoutInsurancePolicyInput.schema';
import { InsurancePolicyMedicalCentersUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersUpsertWithWhereUniqueWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(
        () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
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

export const InsurancePolicyMedicalCentersUpsertWithWhereUniqueWithoutInsurancePolicyInputObjectSchema =
  Schema;
