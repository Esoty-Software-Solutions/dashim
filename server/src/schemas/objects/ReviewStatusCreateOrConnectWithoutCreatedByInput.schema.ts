import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusCreateWithoutCreatedByInputObjectSchema } from './ReviewStatusCreateWithoutCreatedByInput.schema';
import { ReviewStatusUncheckedCreateWithoutCreatedByInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusCreateOrConnectWithoutCreatedByInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => ReviewStatusCreateWithoutCreatedByInputObjectSchema),
        z.lazy(
          () => ReviewStatusUncheckedCreateWithoutCreatedByInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusCreateOrConnectWithoutCreatedByInputObjectSchema =
  Schema;
