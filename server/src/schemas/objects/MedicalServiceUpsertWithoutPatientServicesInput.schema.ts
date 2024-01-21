import { z } from 'zod';
import { MedicalServiceUpdateWithoutPatientServicesInputObjectSchema } from './MedicalServiceUpdateWithoutPatientServicesInput.schema';
import { MedicalServiceUncheckedUpdateWithoutPatientServicesInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutPatientServicesInput.schema';
import { MedicalServiceCreateWithoutPatientServicesInputObjectSchema } from './MedicalServiceCreateWithoutPatientServicesInput.schema';
import { MedicalServiceUncheckedCreateWithoutPatientServicesInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpsertWithoutPatientServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => MedicalServiceUpdateWithoutPatientServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            MedicalServiceUncheckedUpdateWithoutPatientServicesInputObjectSchema,
        ),
      ]),
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

export const MedicalServiceUpsertWithoutPatientServicesInputObjectSchema =
  Schema;
