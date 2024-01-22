import { z } from 'zod';
import { InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCenterWhereUniqueInput.schema';
import { InsurancePolicyMedicalCenterUpdateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUpdateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedUpdateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(
        () => InsurancePolicyMedicalCenterWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterUpdateWithoutMedicalCenterInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterUncheckedUpdateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterCreateWithoutMedicalCenterInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterUncheckedCreateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyMedicalCenterUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema =
  Schema;
