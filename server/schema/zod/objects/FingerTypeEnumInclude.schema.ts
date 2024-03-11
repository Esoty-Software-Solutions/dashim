/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricInputSchema } from '../input/FingerprintBiometricInput.schema';
import { FingerTypeEnumCountOutputTypeArgsObjectSchema } from './FingerTypeEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumInclude>;
export const FingerTypeEnumIncludeObjectSchema: SchemaType = z
    .object({
        fingerType: z.union([z.boolean(), z.lazy(() => FingerprintBiometricInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => FingerTypeEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
