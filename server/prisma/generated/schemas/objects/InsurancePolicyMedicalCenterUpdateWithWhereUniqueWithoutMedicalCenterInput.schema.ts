import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterUpdateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedUpdateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(
        () => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
      ),
      data: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterUpdateWithoutMedicalCenterInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterUncheckedUpdateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyMedicalCenterUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema =
  Schema;
