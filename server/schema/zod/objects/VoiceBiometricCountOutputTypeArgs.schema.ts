/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricCountOutputTypeSelectObjectSchema } from './VoiceBiometricCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricCountOutputTypeArgs>;
export const VoiceBiometricCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => VoiceBiometricCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
