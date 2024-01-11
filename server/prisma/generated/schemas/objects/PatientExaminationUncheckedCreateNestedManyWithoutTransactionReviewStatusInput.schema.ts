import { z } from 'zod';
import { PatientExaminationCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationCreateWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema } from './PatientExaminationCreateOrConnectWithoutTransactionReviewStatusInput.schema';
import { PatientExaminationCreateManyTransactionReviewStatusInputEnvelopeObjectSchema } from './PatientExaminationCreateManyTransactionReviewStatusInputEnvelope.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationUncheckedCreateNestedManyWithoutTransactionReviewStatusInput> =
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
      createMany: z
        .lazy(
          () =>
            PatientExaminationCreateManyTransactionReviewStatusInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema),
          z.lazy(() => PatientExaminationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const PatientExaminationUncheckedCreateNestedManyWithoutTransactionReviewStatusInputObjectSchema =
  Schema;
