/* eslint-disable */
import { z } from 'zod';
import { VoiceBiometricWhereInputObjectSchema } from './VoiceBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.VoiceBiometricNullableRelationFilter>;
export const VoiceBiometricNullableRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z
            .union([z.lazy(() => VoiceBiometricWhereInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        isNot: z
            .union([z.lazy(() => VoiceBiometricWhereInputObjectSchema), z.null()])
            .optional()
            .nullable(),
    })
    .strict() as SchemaType;
