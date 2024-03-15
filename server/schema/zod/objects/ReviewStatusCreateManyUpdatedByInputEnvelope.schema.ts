/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusCreateManyUpdatedByInputObjectSchema } from './ReviewStatusCreateManyUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateManyUpdatedByInputEnvelope>;
export const ReviewStatusCreateManyUpdatedByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => ReviewStatusCreateManyUpdatedByInputObjectSchema),
            z.lazy(() => ReviewStatusCreateManyUpdatedByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
