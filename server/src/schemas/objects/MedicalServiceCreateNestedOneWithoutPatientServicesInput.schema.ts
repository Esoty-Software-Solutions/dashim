import { z } from 'zod';
import { MedicalServiceCreateWithoutPatientServicesInputObjectSchema } from './MedicalServiceCreateWithoutPatientServicesInput.schema';
import { MedicalServiceUncheckedCreateWithoutPatientServicesInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutPatientServicesInput.schema';
import { MedicalServiceCreateOrConnectWithoutPatientServicesInputObjectSchema } from './MedicalServiceCreateOrConnectWithoutPatientServicesInput.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCreateNestedOneWithoutPatientServicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => MedicalServiceCreateWithoutPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceUncheckedCreateWithoutPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalServiceCreateOrConnectWithoutPatientServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalServiceWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalServiceCreateNestedOneWithoutPatientServicesInputObjectSchema =
  Schema;
