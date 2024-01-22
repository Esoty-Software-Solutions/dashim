import { z } from 'zod';
import { VoiceBiometricWhereInputObjectSchema } from './VoiceBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricListRelationFilter> = z
  .object({
    every: z.lazy(() => VoiceBiometricWhereInputObjectSchema).optional(),
    some: z.lazy(() => VoiceBiometricWhereInputObjectSchema).optional(),
    none: z.lazy(() => VoiceBiometricWhereInputObjectSchema).optional(),
  })
  .strict();

export const VoiceBiometricListRelationFilterObjectSchema = Schema;
