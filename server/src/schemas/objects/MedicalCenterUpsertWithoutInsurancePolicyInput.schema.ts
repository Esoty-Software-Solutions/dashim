import { z } from 'zod';
import { MedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUpdateWithoutInsurancePolicyInput.schema';
import { MedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutInsurancePolicyInput.schema';
import { MedicalCenterCreateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterCreateWithoutInsurancePolicyInput.schema';
import { MedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpsertWithoutInsurancePolicyInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => MedicalCenterUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterUncheckedUpdateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => MedicalCenterCreateWithoutInsurancePolicyInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterUpsertWithoutInsurancePolicyInputObjectSchema =
  Schema;
