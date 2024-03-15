/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUpdateWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpdateWithWhereUniqueWithoutTransactionReviewStatusInput>;
export const ReviewStatusUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => ReviewStatusUpdateWithoutTransactionReviewStatusInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
