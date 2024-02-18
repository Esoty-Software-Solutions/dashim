import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutCreatedByInputObjectSchema } from './ReviewStatusUpdateWithoutCreatedByInput.schema';
import { ReviewStatusUncheckedUpdateWithoutCreatedByInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateWithWhereUniqueWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ReviewStatusUpdateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () => ReviewStatusUncheckedUpdateWithoutCreatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema =
  Schema;
