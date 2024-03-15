/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereInputObjectSchema } from './ReviewStatusWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusRelationFilter>;
export const ReviewStatusRelationFilterObjectSchema: SchemaType = z
    .object({
        is: z.lazy(() => ReviewStatusWhereInputObjectSchema).optional(),
        isNot: z.lazy(() => ReviewStatusWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
