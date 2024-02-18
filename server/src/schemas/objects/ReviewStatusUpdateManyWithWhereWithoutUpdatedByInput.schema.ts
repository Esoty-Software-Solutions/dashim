import { z } from 'zod';
import { ReviewStatusScalarWhereInputObjectSchema } from './ReviewStatusScalarWhereInput.schema';
import { ReviewStatusUpdateManyMutationInputObjectSchema } from './ReviewStatusUpdateManyMutationInput.schema';
import { ReviewStatusUncheckedUpdateManyWithoutReviewStatusUpdatesInputObjectSchema } from './ReviewStatusUncheckedUpdateManyWithoutReviewStatusUpdatesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateManyWithWhereWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ReviewStatusUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ReviewStatusUncheckedUpdateManyWithoutReviewStatusUpdatesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpdateManyWithWhereWithoutUpdatedByInputObjectSchema =
  Schema;
