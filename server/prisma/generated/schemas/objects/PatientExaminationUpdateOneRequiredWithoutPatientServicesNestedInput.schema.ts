import { z } from 'zod';
import { PatientExaminationCreateWithoutPatientServicesInputObjectSchema } from './PatientExaminationCreateWithoutPatientServicesInput.schema';
import { PatientExaminationUncheckedCreateWithoutPatientServicesInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutPatientServicesInput.schema';
import { PatientExaminationCreateOrConnectWithoutPatientServicesInputObjectSchema } from './PatientExaminationCreateOrConnectWithoutPatientServicesInput.schema';
import { PatientExaminationUpsertWithoutPatientServicesInputObjectSchema } from './PatientExaminationUpsertWithoutPatientServicesInput.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationUpdateWithoutPatientServicesInputObjectSchema } from './PatientExaminationUpdateWithoutPatientServicesInput.schema';
import { PatientExaminationUncheckedUpdateWithoutPatientServicesInputObjectSchema } from './PatientExaminationUncheckedUpdateWithoutPatientServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpdateOneRequiredWithoutPatientServicesNestedInput> =
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
      upsert: z
        .lazy(
          () => PatientExaminationUpsertWithoutPatientServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => PatientExaminationWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PatientExaminationUpdateWithoutPatientServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              PatientExaminationUncheckedUpdateWithoutPatientServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const PatientExaminationUpdateOneRequiredWithoutPatientServicesNestedInputObjectSchema =
  Schema;
