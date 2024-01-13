import { z } from 'zod';
import { MedicalCenterCreateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterCreateWithoutInsurancePolicyInput.schema';
import { MedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutInsurancePolicyInput.schema';
import { MedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutInsurancePolicyInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateNestedOneWithoutInsurancePolicyInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => MedicalCenterCreateWithoutInsurancePolicyInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterUncheckedCreateWithoutInsurancePolicyInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalCenterCreateOrConnectWithoutInsurancePolicyInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalCenterWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalCenterCreateNestedOneWithoutInsurancePolicyInputObjectSchema =
  Schema;
