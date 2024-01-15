import { z } from 'zod';
import { MedicalCenterServiceUpdateWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceUpdateWithoutPatientServicesInput.schema';
import { MedicalCenterServiceUncheckedUpdateWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceUncheckedUpdateWithoutPatientServicesInput.schema';
import { MedicalCenterServiceCreateWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceCreateWithoutPatientServicesInput.schema';
import { MedicalCenterServiceUncheckedCreateWithoutPatientServicesInputObjectSchema } from './MedicalCenterServiceUncheckedCreateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceUpsertWithoutPatientServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () =>
            MedicalCenterServiceUpdateWithoutPatientServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalCenterServiceUncheckedUpdateWithoutPatientServicesInputObjectSchema,
        ),
      ]),
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

export const MedicalCenterServiceUpsertWithoutPatientServicesInputObjectSchema =
  Schema;
