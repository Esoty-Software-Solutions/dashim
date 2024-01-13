import { z } from 'zod';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceCreateWithoutPatientExaminationInputObjectSchema } from './PatientServiceCreateWithoutPatientExaminationInput.schema';
import { PatientServiceUncheckedCreateWithoutPatientExaminationInputObjectSchema } from './PatientServiceUncheckedCreateWithoutPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateOrConnectWithoutPatientExaminationInput> =
  z
    .object({
      where: z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
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

export const PatientServiceCreateOrConnectWithoutPatientExaminationInputObjectSchema =
  Schema;
