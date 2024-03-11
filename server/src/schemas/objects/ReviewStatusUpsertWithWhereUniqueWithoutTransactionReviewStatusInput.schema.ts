import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUpdateWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusCreateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusCreateWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpsertWithWhereUniqueWithoutTransactionReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () =>
            ReviewStatusUpdateWithoutTransactionReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedUpdateWithoutTransactionReviewStatusInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () =>
            ReviewStatusCreateWithoutTransactionReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpsertWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema =
  Schema;
