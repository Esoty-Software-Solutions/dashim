import { z } from 'zod';
import { MedicalServiceCreateWithoutPatientServicesInputObjectSchema } from './MedicalServiceCreateWithoutPatientServicesInput.schema';
import { MedicalServiceUncheckedCreateWithoutPatientServicesInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutPatientServicesInput.schema';
import { MedicalServiceCreateOrConnectWithoutPatientServicesInputObjectSchema } from './MedicalServiceCreateOrConnectWithoutPatientServicesInput.schema';
import { MedicalServiceUpsertWithoutPatientServicesInputObjectSchema } from './MedicalServiceUpsertWithoutPatientServicesInput.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithoutPatientServicesInputObjectSchema } from './MedicalServiceUpdateWithoutPatientServicesInput.schema';
import { MedicalServiceUncheckedUpdateWithoutPatientServicesInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpdateOneRequiredWithoutPatientServicesNestedInput> =
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
      upsert: z
        .lazy(() => MedicalServiceUpsertWithoutPatientServicesInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => MedicalServiceWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => MedicalServiceUpdateWithoutPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceUncheckedUpdateWithoutPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalServiceUpdateOneRequiredWithoutPatientServicesNestedInputObjectSchema =
  Schema;
