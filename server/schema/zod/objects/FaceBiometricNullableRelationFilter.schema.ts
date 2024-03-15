/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricWhereInputObjectSchema } from './FaceBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricNullableRelationFilter>;
export const FaceBiometricNullableRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z
            .union([z.lazy(() => FaceBiometricWhereInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        isNot: z
            .union([z.lazy(() => FaceBiometricWhereInputObjectSchema), z.null()])
            .optional()
            .nullable(),
    })
    .strict() as SchemaType;
