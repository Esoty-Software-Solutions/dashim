/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereInputObjectSchema } from './ReviewStatusWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusListRelationFilter>;
export const ReviewStatusListRelationFilterObjectSchema: SchemaType = z
    .object({
        every: z.lazy(() => ReviewStatusWhereInputObjectSchema).optional(),
        some: z.lazy(() => ReviewStatusWhereInputObjectSchema).optional(),
        none: z.lazy(() => ReviewStatusWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
