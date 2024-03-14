/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusCreateManyCreatedByInputObjectSchema } from './ReviewStatusCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateManyCreatedByInputEnvelope>;
export const ReviewStatusCreateManyCreatedByInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => ReviewStatusCreateManyCreatedByInputObjectSchema),
            z.lazy(() => ReviewStatusCreateManyCreatedByInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
