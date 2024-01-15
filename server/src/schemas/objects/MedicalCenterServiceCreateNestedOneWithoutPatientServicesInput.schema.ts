import { z } from 'zod';
import { MedicalCenterServiceCreateWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceCreateWithoutPatientServicesInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutPatientServicesInput.schema';
import { MedicalCenterServiceCreateOrConnectWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceCreateOrConnectWithoutPatientServicesInput.schema';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceCreateNestedOneWithoutPatientServicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceCreateWithoutPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterServiceUncheckedCreateWithoutPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalCenterServiceCreateOrConnectWithoutPatientServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalCenterServiceCreateNestedOneWithoutPatientServicesInputObjectSchema =
  Schema;
