import { z } from 'zod';
import { ReviewStatusCreateManyCreatedByInputObjectSchema } from './ReviewStatusCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateManyCreatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ReviewStatusCreateManyCreatedByInputObjectSchema),
      z.lazy(() => ReviewStatusCreateManyCreatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ReviewStatusCreateManyCreatedByInputEnvelopeObjectSchema = Schema;
