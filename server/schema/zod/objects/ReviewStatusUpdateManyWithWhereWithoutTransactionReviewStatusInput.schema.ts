/* eslint-disable */
import { z } from 'zod';
import { ReviewStatusScalarWhereInputObjectSchema } from './ReviewStatusScalarWhereInput.schema';
import { ReviewStatusUpdateManyMutationInputObjectSchema } from './ReviewStatusUpdateManyMutationInput.schema';
import { ReviewStatusUncheckedUpdateManyWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUncheckedUpdateManyWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.ReviewStatusUpdateManyWithWhereWithoutTransactionReviewStatusInput>;
export const ReviewStatusUpdateManyWithWhereWithoutTransactionReviewStatusInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => ReviewStatusScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => ReviewStatusUpdateManyMutationInputObjectSchema),
            z.lazy(() => ReviewStatusUncheckedUpdateManyWithoutTransactionReviewStatusInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
