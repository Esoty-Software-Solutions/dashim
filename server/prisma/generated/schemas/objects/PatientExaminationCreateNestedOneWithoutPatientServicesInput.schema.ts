import { z } from 'zod';
import { PatientExaminationCreateWithoutPatientServicesInputObjectSchema } from './PatientExaminationCreateWithoutPatientServicesInput.schema';
import { PatientExaminationUncheckedCreateWithoutPatientServicesInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutPatientServicesInput.schema';
import { PatientExaminationCreateOrConnectWithoutPatientServicesInputObjectSchema } from './PatientExaminationCreateOrConnectWithoutPatientServicesInput.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateNestedOneWithoutPatientServicesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              PatientExaminationCreateWithoutPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              PatientExaminationUncheckedCreateWithoutPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            PatientExaminationCreateOrConnectWithoutPatientServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => PatientExaminationWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const PatientExaminationCreateNestedOneWithoutPatientServicesInputObjectSchema =
  Schema;
