/* eslint-disable */
import { z } from 'zod';
import { IDCardWhereInputObjectSchema } from './IDCardWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.IDCardNullableRelationFilter>;
export const IDCardNullableRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z
            .union([z.lazy(() => IDCardWhereInputObjectSchema), z.null()])
            .optional()
            .nullable(),
        isNot: z
            .union([z.lazy(() => IDCardWhereInputObjectSchema), z.null()])
            .optional()
            .nullable(),
    })
    .strict() as SchemaType;
