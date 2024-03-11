import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusCreateWithoutUpdatedByInputObjectSchema } from './ReviewStatusCreateWithoutUpdatedByInput.schema';
import { ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateOrConnectWithoutUpdatedByInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ReviewStatusCreateWithoutUpdatedByInputObjectSchema),
        z.lazy(
          () => ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusCreateOrConnectWithoutUpdatedByInputObjectSchema =
  Schema;
