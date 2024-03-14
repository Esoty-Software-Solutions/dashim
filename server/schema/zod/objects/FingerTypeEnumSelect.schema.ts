/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricInputSchema } from '../input/FingerprintBiometricInput.schema';
import { FingerTypeEnumCountOutputTypeArgsObjectSchema } from './FingerTypeEnumCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumSelect>;
export const FingerTypeEnumSelectObjectSchema: SchemaType = z
    .object({
        id: z.boolean().optional(),
        createdAt: z.boolean().optional(),
        updatedAt: z.boolean().optional(),
        isPublished: z.boolean().optional(),
        isSoftDeleted: z.boolean().optional(),
        arabic: z.boolean().optional(),
        english: z.boolean().optional(),
        name: z.boolean().optional(),
        fingerType: z.union([z.boolean(), z.lazy(() => FingerprintBiometricInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => FingerTypeEnumCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
