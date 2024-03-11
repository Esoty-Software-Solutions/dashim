import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUpdateWithoutUpdatedByInput.schema';
import { ReviewStatusUncheckedUpdateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutUpdatedByInput.schema';
import { ReviewStatusCreateWithoutUpdatedByInputObjectSchema } from './ReviewStatusCreateWithoutUpdatedByInput.schema';
import { ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpsertWithWhereUniqueWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ReviewStatusUpdateWithoutUpdatedByInputObjectSchema),
        z.lazy(
          () => ReviewStatusUncheckedUpdateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => ReviewStatusCreateWithoutUpdatedByInputObjectSchema),
        z.lazy(
          () => ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema =
  Schema;
