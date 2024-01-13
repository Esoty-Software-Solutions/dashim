import { z } from 'zod';
import { PatientServiceCreateWithoutPatientExaminationInputObjectSchema } from './PatientServiceCreateWithoutPatientExaminationInput.schema';
import { PatientServiceUncheckedCreateWithoutPatientExaminationInputObjectSchema } from './PatientServiceUncheckedCreateWithoutPatientExaminationInput.schema';
import { PatientServiceCreateOrConnectWithoutPatientExaminationInputObjectSchema } from './PatientServiceCreateOrConnectWithoutPatientExaminationInput.schema';
import { PatientServiceCreateManyPatientExaminationInputEnvelopeObjectSchema } from './PatientServiceCreateManyPatientExaminationInputEnvelope.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateNestedManyWithoutPatientExaminationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              PatientServiceCreateWithoutPatientExaminationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceCreateWithoutPatientExaminationInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              PatientServiceUncheckedCreateWithoutPatientExaminationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUncheckedCreateWithoutPatientExaminationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PatientServiceCreateOrConnectWithoutPatientExaminationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceCreateOrConnectWithoutPatientExaminationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            PatientServiceCreateManyPatientExaminationInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PatientServiceCreateNestedManyWithoutPatientExaminationInputObjectSchema =
  Schema;
