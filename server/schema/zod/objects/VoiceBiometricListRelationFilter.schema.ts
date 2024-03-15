/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricWhereInputObjectSchema } from './VoiceBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricListRelationFilter>;
export const VoiceBiometricListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => VoiceBiometricWhereInputObjectSchema).optional(),
        some: z.lazy(() => VoiceBiometricWhereInputObjectSchema).optional(),
        none: z.lazy(() => VoiceBiometricWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
