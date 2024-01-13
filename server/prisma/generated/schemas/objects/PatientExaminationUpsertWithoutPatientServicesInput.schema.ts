import { z } from 'zod';
import { PatientExaminationUpdateWithoutPatientServicesInputObjectSchema } from './PatientExaminationUpdateWithoutPatientServicesInput.schema';
import { PatientExaminationUncheckedUpdateWithoutPatientServicesInputObjectSchema } from './PatientExaminationUncheckedUpdateWithoutPatientServicesInput.schema';
import { PatientExaminationCreateWithoutPatientServicesInputObjectSchema } from './PatientExaminationCreateWithoutPatientServicesInput.schema';
import { PatientExaminationUncheckedCreateWithoutPatientServicesInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpsertWithoutPatientServicesInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => PatientExaminationUpdateWithoutPatientServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientExaminationUncheckedUpdateWithoutPatientServicesInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => PatientExaminationCreateWithoutPatientServicesInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientExaminationUncheckedCreateWithoutPatientServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientExaminationUpsertWithoutPatientServicesInputObjectSchema =
  Schema;
