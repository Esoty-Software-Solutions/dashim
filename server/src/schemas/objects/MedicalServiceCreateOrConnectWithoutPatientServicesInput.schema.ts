import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceCreateWithoutPatientServicesInputObjectSchema } from './MedicalServiceCreateWithoutPatientServicesInput.schema';
import { MedicalServiceUncheckedCreateWithoutPatientServicesInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCreateOrConnectWithoutPatientServicesInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => MedicalServiceCreateWithoutPatientServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceUncheckedCreateWithoutPatientServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceCreateOrConnectWithoutPatientServicesInputObjectSchema =
  Schema;
