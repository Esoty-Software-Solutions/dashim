/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusEnumWhereInputObjectSchema } from './ReviewStatusEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumRelationFilter>;
export const ReviewStatusEnumRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => ReviewStatusEnumWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => ReviewStatusEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
