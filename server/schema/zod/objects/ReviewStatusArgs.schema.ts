/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusSelectObjectSchema } from './ReviewStatusSelect.schema';
import { ReviewStatusIncludeObjectSchema } from './ReviewStatusInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusArgs>;
export const ReviewStatusArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => ReviewStatusSelectObjectSchema).optional(),
        include: z.lazy(() => ReviewStatusIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
