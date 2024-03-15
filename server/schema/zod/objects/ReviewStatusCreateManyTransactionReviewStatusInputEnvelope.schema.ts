/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusCreateManyTransactionReviewStatusInputObjectSchema } from './ReviewStatusCreateManyTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateManyTransactionReviewStatusInputEnvelope>;
export const ReviewStatusCreateManyTransactionReviewStatusInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => ReviewStatusCreateManyTransactionReviewStatusInputObjectSchema),
            z.lazy(() => ReviewStatusCreateManyTransactionReviewStatusInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
