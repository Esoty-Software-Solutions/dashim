/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusEnumCountOutputTypeSelectObjectSchema } from './ReviewStatusEnumCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusEnumCountOutputTypeArgs>;
export const ReviewStatusEnumCountOutputTypeArgsObjectSchema: SchemaType = z
    .object({
        select: z.lazy(() => ReviewStatusEnumCountOutputTypeSelectObjectSchema).optional(),
    })
    .strict() as SchemaType;
