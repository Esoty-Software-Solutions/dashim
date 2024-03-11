/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricSelectObjectSchema } from './FingerprintBiometricSelect.schema';
import { FingerprintBiometricIncludeObjectSchema } from './FingerprintBiometricInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricArgs>;
export const FingerprintBiometricArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => FingerprintBiometricSelectObjectSchema).optional(),
        include: z.lazy(() => FingerprintBiometricIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
