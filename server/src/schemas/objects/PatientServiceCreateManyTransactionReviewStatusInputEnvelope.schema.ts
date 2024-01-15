import { z } from 'zod';
import { PatientServiceCreateManyTransactionReviewStatusInputObjectSchema } from './PatientServiceCreateManyTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateManyTransactionReviewStatusInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            PatientServiceCreateManyTransactionReviewStatusInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              PatientServiceCreateManyTransactionReviewStatusInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PatientServiceCreateManyTransactionReviewStatusInputEnvelopeObjectSchema =
  Schema;
