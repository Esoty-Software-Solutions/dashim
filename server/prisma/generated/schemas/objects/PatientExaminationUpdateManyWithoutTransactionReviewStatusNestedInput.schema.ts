import { z } from 'zod';
import { PatientExaminationCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationCreateWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationCreateOrConnectWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationUpsertWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUpsertWithWhereUniqueWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationCreateManyTransactionReviewStatusInputEnvelopeObjectSchema } from './PatientExaminationCreateManyTransactionReviewStatusInputEnvelope.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';
import { PatientExaminationUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUpdateWithWhereUniqueWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationUpdateManyWithWhereWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUpdateManyWithWhereWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationScalarWhereInputObjectSchema } from './PatientExaminationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUpdateManyWithoutTransactionReviewStatusNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              PatientExaminationCreateWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationCreateWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              PatientExaminationUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              PatientExaminationCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              PatientExaminationUpsertWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationUpsertWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            PatientExaminationCreateManyTransactionReviewStatusInputEnvelopeObjectSchema,
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
              PatientExaminationUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              PatientExaminationUpdateManyWithWhereWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PatientExaminationUpdateManyWithWhereWithoutTransactionReviewStatusInputObjectSchema,
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

export const PatientExaminationUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema =
  Schema;
