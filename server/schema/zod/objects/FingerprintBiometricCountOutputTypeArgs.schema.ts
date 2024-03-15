/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricCountOutputTypeSelectObjectSchema } from './FingerprintBiometricCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricCountOutputTypeArgs>;
export const FingerprintBiometricCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => FingerprintBiometricCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
