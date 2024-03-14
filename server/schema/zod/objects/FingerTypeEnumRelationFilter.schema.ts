/* eslint-disable */
import { z } from 'zod';
import { FingerTypeEnumWhereInputObjectSchema } from './FingerTypeEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.FingerTypeEnumRelationFilter>;
export const FingerTypeEnumRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => FingerTypeEnumWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => FingerTypeEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
