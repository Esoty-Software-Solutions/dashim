import { z } from 'zod';
import { PatientServiceCreateWithoutPatientExaminationInputObjectSchema } from './PatientServiceCreateWithoutPatientExaminationInput.schema';
import { PatientServiceUncheckedCreateWithoutPatientExaminationInputObjectSchema } from './PatientServiceUncheckedCreateWithoutPatientExaminationInput.schema';
import { PatientServiceCreateOrConnectWithoutPatientExaminationInputObjectSchema } from './PatientServiceCreateOrConnectWithoutPatientExaminationInput.schema';
import { PatientServiceUpsertWithWhereUniqueWithoutPatientExaminationInputObjectSchema } from './PatientServiceUpsertWithWhereUniqueWithoutPatientExaminationInput.schema';
import { PatientServiceCreateManyPatientExaminationInputEnvelopeObjectSchema } from './PatientServiceCreateManyPatientExaminationInputEnvelope.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithWhereUniqueWithoutPatientExaminationInputObjectSchema } from './PatientServiceUpdateWithWhereUniqueWithoutPatientExaminationInput.schema';
import { PatientServiceUpdateManyWithWhereWithoutPatientExaminationInputObjectSchema } from './PatientServiceUpdateManyWithWhereWithoutPatientExaminationInput.schema';
import { PatientServiceScalarWhereInputObjectSchema } from './PatientServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUpdateManyWithoutPatientExaminationNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpsertWithWhereUniqueWithoutPatientExaminationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpsertWithWhereUniqueWithoutPatientExaminationInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema),
          z.lazy(() => PatientServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpdateWithWhereUniqueWithoutPatientExaminationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpdateWithWhereUniqueWithoutPatientExaminationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpdateManyWithWhereWithoutPatientExaminationInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpdateManyWithWhereWithoutPatientExaminationInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PatientServiceScalarWhereInputObjectSchema),
          z.lazy(() => PatientServiceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PatientServiceUpdateManyWithoutPatientExaminationNestedInputObjectSchema =
  Schema;
