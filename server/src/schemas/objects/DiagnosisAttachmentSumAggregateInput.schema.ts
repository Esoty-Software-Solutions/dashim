import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.DiagnosisAttachmentSumAggregateInputType> = z
  .object({
    size: z.literal(true).optional(),
  })
  .strict();

export const DiagnosisAttachmentSumAggregateInputObjectSchema = Schema;
