import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUpdateWithoutUpdatedByInput.schema';
import { ReviewStatusUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateWithWhereUniqueWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReviewStatusUpdateWithoutUpdatedByInputObjectSchema),
        z.lazy(
          () => ReviewStatusUncheckedUpdateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema =
  Schema;
