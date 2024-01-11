import { z } from 'zod';
import { PatientExaminationCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationCreateWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationCreateOrConnectWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationUpsertWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationUpsertWithWhereUniqueWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationCreateManyMedicalReviewStatusInputEnvelopeObjectSchema } from './PatientExaminationCreateManyMedicalReviewStatusInputEnvelope.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationUpdateWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationUpdateWithWhereUniqueWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationUpdateManyWithWhereWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationScalarWhereInputObjectSchema } from './PatientExaminationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpdateManyWithoutMedicalReviewStatusNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              PatientExaminationCreateWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationCreateWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              PatientExaminationUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PatientExaminationCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PatientExaminationUpsertWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationUpsertWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            PatientExaminationCreateManyMedicalReviewStatusInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              PatientExaminationUpdateWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationUpdateWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PatientExaminationUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationUpdateManyWithWhereWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => PatientExaminationScalarWhereInputObjectSchema),
          z.lazy(() => PatientExaminationScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PatientExaminationUpdateManyWithoutMedicalReviewStatusNestedInputObjectSchema =
  Schema;
