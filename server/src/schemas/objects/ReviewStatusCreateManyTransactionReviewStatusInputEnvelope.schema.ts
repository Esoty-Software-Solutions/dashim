import { z } from 'zod';
import { ReviewStatusCreateManyTransactionReviewStatusInputObjectSchema } from './ReviewStatusCreateManyTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateManyTransactionReviewStatusInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => ReviewStatusCreateManyTransactionReviewStatusInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              ReviewStatusCreateManyTransactionReviewStatusInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ReviewStatusCreateManyTransactionReviewStatusInputEnvelopeObjectSchema =
  Schema;
