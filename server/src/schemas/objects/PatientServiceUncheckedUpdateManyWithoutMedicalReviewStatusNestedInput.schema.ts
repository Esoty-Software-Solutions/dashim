import { z } from 'zod';
import { PatientServiceCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceCreateWithoutMedicalReviewStatusInput.schema';
import { PatientServiceUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUncheckedCreateWithoutMedicalReviewStatusInput.schema';
import { PatientServiceCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceCreateOrConnectWithoutMedicalReviewStatusInput.schema';
import { PatientServiceUpsertWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUpsertWithWhereUniqueWithoutMedicalReviewStatusInput.schema';
import { PatientServiceCreateManyMedicalReviewStatusInputEnvelopeObjectSchema } from './PatientServiceCreateManyMedicalReviewStatusInputEnvelope.schema';
import { PatientServiceWhereUniqueInputObjectSchema } from './PatientServiceWhereUniqueInput.schema';
import { PatientServiceUpdateWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUpdateWithWhereUniqueWithoutMedicalReviewStatusInput.schema';
import { PatientServiceUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema } from './PatientServiceUpdateManyWithWhereWithoutMedicalReviewStatusInput.schema';
import { PatientServiceScalarWhereInputObjectSchema } from './PatientServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceUncheckedUpdateManyWithoutMedicalReviewStatusNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              PatientServiceCreateWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceCreateWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              PatientServiceUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PatientServiceCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpsertWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpsertWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            PatientServiceCreateManyMedicalReviewStatusInputEnvelopeObjectSchema,
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
              PatientServiceUpdateWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpdateWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PatientServiceUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientServiceUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema,
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

export const PatientServiceUncheckedUpdateManyWithoutMedicalReviewStatusNestedInputObjectSchema =
  Schema;
