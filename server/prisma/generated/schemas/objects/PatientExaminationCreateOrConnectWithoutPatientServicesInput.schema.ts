import { z } from 'zod';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationCreateWithoutPatientServicesInputObjectSchema } from './PatientExaminationCreateWithoutPatientServicesInput.schema';
import { PatientExaminationUncheckedCreateWithoutPatientServicesInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateOrConnectWithoutPatientServicesInput> =
  z
    .object({
      where: z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
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

export const PatientExaminationCreateOrConnectWithoutPatientServicesInputObjectSchema =
  Schema;
