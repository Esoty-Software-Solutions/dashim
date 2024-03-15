/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusEnumSelectObjectSchema } from './ReviewStatusEnumSelect.schema';
import { ReviewStatusEnumIncludeObjectSchema } from './ReviewStatusEnumInclude.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumArgs>;
export const ReviewStatusEnumArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => ReviewStatusEnumSelectObjectSchema).optional(),
        include: z.lazy(() => ReviewStatusEnumIncludeObjectSchema).optional(),
    })
    .strict() as SchemaType;
