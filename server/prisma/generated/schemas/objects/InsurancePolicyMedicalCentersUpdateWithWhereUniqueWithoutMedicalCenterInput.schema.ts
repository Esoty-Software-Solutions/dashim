import { z } from 'zod';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCentersWhereUniqueInput.schema';
import { InsurancePolicyMedicalCentersUpdateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersUpdateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedUpdateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersUpdateWithWhereUniqueWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(
        () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersUpdateWithoutMedicalCenterInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersUncheckedUpdateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyMedicalCentersUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema =
  Schema;
