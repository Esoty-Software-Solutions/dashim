import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithoutPatientExaminationInputObjectSchema } from './PatientServiceUpdateWithoutPatientExaminationInput.schema';
import { PatientServiceUncheckedUpdateWithoutPatientExaminationInputObjectSchema } from './PatientServiceUncheckedUpdateWithoutPatientExaminationInput.schema';
import { PatientServiceCreateWithoutPatientExaminationInputObjectSchema } from './PatientServiceCreateWithoutPatientExaminationInput.schema';
import { PatientServiceUncheckedCreateWithoutPatientExaminationInputObjectSchema } from './PatientServiceUncheckedCreateWithoutPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpsertWithWhereUniqueWithoutPatientExaminationInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => PatientServiceUpdateWithoutPatientExaminationInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateWithoutPatientExaminationInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => PatientServiceCreateWithoutPatientExaminationInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientServiceUncheckedCreateWithoutPatientExaminationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceUpsertWithWhereUniqueWithoutPatientExaminationInputObjectSchema =
  Schema;
