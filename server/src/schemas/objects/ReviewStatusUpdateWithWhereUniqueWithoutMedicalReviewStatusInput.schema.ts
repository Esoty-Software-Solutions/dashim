import { z } from 'zod';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUpdateWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusUncheckedUpdateWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUncheckedUpdateWithoutMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUpdateWithWhereUniqueWithoutMedicalReviewStatusInput> =
  z
    .object({
      where: z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => ReviewStatusUpdateWithoutMedicalReviewStatusInputObjectSchema,
        ),
        z.lazy(
          () =>
            ReviewStatusUncheckedUpdateWithoutMedicalReviewStatusInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const ReviewStatusUpdateWithWhereUniqueWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
