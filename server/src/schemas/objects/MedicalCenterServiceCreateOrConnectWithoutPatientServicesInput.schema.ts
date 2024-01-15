import { z } from 'zod';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceCreateWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceCreateWithoutPatientServicesInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceCreateOrConnectWithoutPatientServicesInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () =>
            MedicalCenterServiceCreateWithoutPatientServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceUncheckedCreateWithoutPatientServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterServiceCreateOrConnectWithoutPatientServicesInputObjectSchema =
  Schema;
