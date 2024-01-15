import { z } from 'zod';
import { MedicalCenterServiceCreateWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceCreateWithoutPatientServicesInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutPatientServicesInput.schema';
import { MedicalCenterServiceCreateOrConnectWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceCreateOrConnectWithoutPatientServicesInput.schema';
import { MedicalCenterServiceUpsertWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceUpsertWithoutPatientServicesInput.schema';
import { MedicalCenterServiceWhereUniqueInputObjectSchema } from './MedicalCenterServiceWhereUniqueInput.schema';
import { MedicalCenterServiceUpdateWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceUpdateWithoutPatientServicesInput.schema';
import { MedicalCenterServiceUncheckedUpdateWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceUncheckedUpdateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUpdateOneRequiredWithoutPatientServicesNestedInput> =
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
      upsert: z
        .lazy(
          () =>
            MedicalCenterServiceUpsertWithoutPatientServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalCenterServiceWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceUpdateWithoutPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterServiceUncheckedUpdateWithoutPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterServiceUpdateOneRequiredWithoutPatientServicesNestedInputObjectSchema =
  Schema;
