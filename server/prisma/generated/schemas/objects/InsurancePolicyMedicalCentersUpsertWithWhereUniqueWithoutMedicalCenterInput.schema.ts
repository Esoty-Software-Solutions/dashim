import { z } from 'zod';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCentersWhereUniqueInput.schema';
import { InsurancePolicyMedicalCentersUpdateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersUpdateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedUpdateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersUpsertWithWhereUniqueWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(
        () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
      ),
      update: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersUpdateWithoutMedicalCenterInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersUncheckedUpdateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInputObjectSchema,
        ),
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersUncheckedCreateWithoutMedicalCenterInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InsurancePolicyMedicalCentersUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema =
  Schema;
