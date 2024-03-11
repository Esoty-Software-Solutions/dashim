import { z } from 'zod';
import { ReviewStatusCreateManyUpdatedByInputObjectSchema } from './ReviewStatusCreateManyUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateManyUpdatedByInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => ReviewStatusCreateManyUpdatedByInputObjectSchema),
      z.lazy(() => ReviewStatusCreateManyUpdatedByInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const ReviewStatusCreateManyUpdatedByInputEnvelopeObjectSchema = Schema;
