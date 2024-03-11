import { z } from 'zod';
import { VoiceBiometricWhereInputObjectSchema } from './VoiceBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricRelationFilter> = z
  .object({
    is: z
      .lazy(() => VoiceBiometricWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VoiceBiometricWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const VoiceBiometricRelationFilterObjectSchema = Schema;
