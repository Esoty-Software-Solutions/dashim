import { z } from 'zod';
import { ReviewStatusCreateManyMedicalReviewStatusInputObjectSchema } from './ReviewStatusCreateManyMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateManyMedicalReviewStatusInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => ReviewStatusCreateManyMedicalReviewStatusInputObjectSchema,
        ),
        z
          .lazy(
            () => ReviewStatusCreateManyMedicalReviewStatusInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const ReviewStatusCreateManyMedicalReviewStatusInputEnvelopeObjectSchema =
  Schema;
