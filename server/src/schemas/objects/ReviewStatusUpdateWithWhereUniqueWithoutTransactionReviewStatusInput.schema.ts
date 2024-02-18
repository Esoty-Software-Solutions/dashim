import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUpdateWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateWithWhereUniqueWithoutTransactionReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () =>
            ReviewStatusUpdateWithoutTransactionReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema =
  Schema;
