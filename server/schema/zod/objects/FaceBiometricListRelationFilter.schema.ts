/* eslint-disable */
import { z } from 'zod';
import { FaceBiometricWhereInputObjectSchema } from './FaceBiometricWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FaceBiometricListRelationFilter>;
export const FaceBiometricListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => FaceBiometricWhereInputObjectSchema).optional(),
        some: z.lazy(() => FaceBiometricWhereInputObjectSchema).optional(),
        none: z.lazy(() => FaceBiometricWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
