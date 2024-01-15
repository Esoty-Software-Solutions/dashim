import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterCreateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterCreateWithoutInsurancePolicyInput.schema';
import { MedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateOrConnectWithoutInsurancePolicyInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
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

export const MedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema =
  Schema;
