/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusCreateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusCreateWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusCreateOrConnectWithoutTransactionReviewStatusInput>;
export const ReviewStatusCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => ReviewStatusCreateWithoutTransactionReviewStatusInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
