import { z } from 'zod';
import { VoiceWhereInputObjectSchema } from './VoiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceRelationFilter> = z
  .object({
    is: z
      .lazy(() => VoiceWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VoiceWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const VoiceRelationFilterObjectSchema = Schema;
