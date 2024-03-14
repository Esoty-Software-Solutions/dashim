/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusCreateManyMedicalReviewStatusInputObjectSchema } from './ReviewStatusCreateManyMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateManyMedicalReviewStatusInputEnvelope>;
export const ReviewStatusCreateManyMedicalReviewStatusInputEnvelopeObjectSchema: SchemaType = z
    .object({
        data: z.union([
            z.lazy(() => ReviewStatusCreateManyMedicalReviewStatusInputObjectSchema),
            z.lazy(() => ReviewStatusCreateManyMedicalReviewStatusInputObjectSchema).array(),
        ]),
        skipDuplicates: z.boolean().optional(),
    })
    .strict() as SchemaType;
