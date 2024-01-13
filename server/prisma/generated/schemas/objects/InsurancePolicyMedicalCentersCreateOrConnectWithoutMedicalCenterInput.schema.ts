import { z } from 'zod';
import { InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema } from './InsurancePolicyMedicalCentersWhereUniqueInput.schema';
import { InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersCreateWithoutMedicalCenterInput.schema';
import { InsurancePolicyMedicalCentersUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersCreateOrConnectWithoutMedicalCenterInput> =
  z
    .object({
      where: z.lazy(
        () => InsurancePolicyMedicalCentersWhereUniqueInputObjectSchema,
      ),
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

export const InsurancePolicyMedicalCentersCreateOrConnectWithoutMedicalCenterInputObjectSchema =
  Schema;
