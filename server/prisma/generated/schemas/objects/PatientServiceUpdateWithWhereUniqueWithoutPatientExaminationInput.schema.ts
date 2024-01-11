import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithoutPatientExaminationInputObjectSchema } from './PatientServiceUpdateWithoutPatientExaminationInput.schema';
import { PatientServiceUncheckedUpdateWithoutPatientExaminationInputObjectSchema } from './PatientServiceUncheckedUpdateWithoutPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateWithWhereUniqueWithoutPatientExaminationInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => PatientServiceUpdateWithoutPatientExaminationInputObjectSchema,
        ),
        z.lazy(
          () =>
            PatientServiceUncheckedUpdateWithoutPatientExaminationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const PatientServiceUpdateWithWhereUniqueWithoutPatientExaminationInputObjectSchema =
  Schema;
