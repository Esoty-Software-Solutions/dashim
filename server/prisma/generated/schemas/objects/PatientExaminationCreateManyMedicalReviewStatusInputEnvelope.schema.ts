import { z } from 'zod';
import { PatientExaminationCreateManyMedicalReviewStatusInputObjectSchema } from './PatientExaminationCreateManyMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateManyMedicalReviewStatusInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            PatientExaminationCreateManyMedicalReviewStatusInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              PatientExaminationCreateManyMedicalReviewStatusInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PatientExaminationCreateManyMedicalReviewStatusInputEnvelopeObjectSchema =
  Schema;
