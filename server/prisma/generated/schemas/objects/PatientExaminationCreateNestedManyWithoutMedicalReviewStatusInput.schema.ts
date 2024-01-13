import { z } from 'zod';
import { PatientExaminationCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationCreateWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationUncheckedCreateWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema } from './PatientExaminationCreateOrConnectWithoutMedicalReviewStatusInput.schema';
import { PatientExaminationCreateManyMedicalReviewStatusInputEnvelopeObjectSchema } from './PatientExaminationCreateManyMedicalReviewStatusInputEnvelope.schema';
import { PatientExaminationWhereUniqueInputObjectSchema } from './PatientExaminationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateNestedManyWithoutMedicalReviewStatusInput> =
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
      createMany: z
        .lazy(
          () =>
            PatientExaminationCreateManyMedicalReviewStatusInputEnvelopeObjectSchema,
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

export const PatientExaminationCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
