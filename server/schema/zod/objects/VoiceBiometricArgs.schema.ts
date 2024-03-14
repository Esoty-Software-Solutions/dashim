/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricSelectObjectSchema } from './VoiceBiometricSelect.schema';
import { VoiceBiometricIncludeObjectSchema } from './VoiceBiometricInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricArgs>;
export const VoiceBiometricArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => VoiceBiometricSelectObjectSchema).optional(),
        include: z.lazy(() => VoiceBiometricIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
