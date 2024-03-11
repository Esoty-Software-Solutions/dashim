/* eslint-disable */
import { z } from 'zod';
import { FingerprintBiometricWhereInputObjectSchema } from './FingerprintBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerprintBiometricListRelationFilter>;
export const FingerprintBiometricListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => FingerprintBiometricWhereInputObjectSchema).optional(),
        some: z.lazy(() => FingerprintBiometricWhereInputObjectSchema).optional(),
        none: z.lazy(() => FingerprintBiometricWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
