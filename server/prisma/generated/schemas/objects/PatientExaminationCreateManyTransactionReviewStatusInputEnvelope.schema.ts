import { z } from 'zod';
import { PatientExaminationCreateManyTransactionReviewStatusInputObjectSchema } from './PatientExaminationCreateManyTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateManyTransactionReviewStatusInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            PatientExaminationCreateManyTransactionReviewStatusInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              PatientExaminationCreateManyTransactionReviewStatusInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PatientExaminationCreateManyTransactionReviewStatusInputEnvelopeObjectSchema =
  Schema;
