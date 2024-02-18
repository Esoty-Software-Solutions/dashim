import { z } from 'zod';
import { ReviewStatusCreateWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusCreateWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutMedicalReviewStatusInput.schema';
import { ReviewStatusCreateManyMedicalReviewStatusInputEnvelopeObjectSchema } from './ReviewStatusCreateManyMedicalReviewStatusInputEnvelope.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUncheckedCreateNestedManyWithoutMedicalReviewStatusInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => ReviewStatusCreateWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusCreateWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusUncheckedCreateWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ReviewStatusCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusCreateOrConnectWithoutMedicalReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            ReviewStatusCreateManyMedicalReviewStatusInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
          z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ReviewStatusUncheckedCreateNestedManyWithoutMedicalReviewStatusInputObjectSchema =
  Schema;
