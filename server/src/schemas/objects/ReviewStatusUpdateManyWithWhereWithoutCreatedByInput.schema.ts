import { z } from 'zod';
import { ReviewStatusScalarWhereInputObjectSchema } from './ReviewStatusScalarWhereInput.schema';
import { ReviewStatusUpdateManyMutationInputObjectSchema } from './ReviewStatusUpdateManyMutationInput.schema';
import { ReviewStatusUncheckedUpdateManyWithoutReviewStatusCreationsInputObjectSchema } from './ReviewStatusUncheckedUpdateManyWithoutReviewStatusCreationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateManyWithWhereWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => ReviewStatusUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            ReviewStatusUncheckedUpdateManyWithoutReviewStatusCreationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpdateManyWithWhereWithoutCreatedByInputObjectSchema =
  Schema;
