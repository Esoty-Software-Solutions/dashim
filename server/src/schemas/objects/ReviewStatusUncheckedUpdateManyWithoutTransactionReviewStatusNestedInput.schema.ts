import { z } from 'zod';
import { ReviewStatusCreateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusCreateWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusUpsertWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUpsertWithWhereUniqueWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusCreateManyTransactionReviewStatusInputEnvelopeObjectSchema } from './ReviewStatusCreateManyTransactionReviewStatusInputEnvelope.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUpdateWithWhereUniqueWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusUpdateManyWithWhereWithoutTransactionReviewStatusInputObjectSchema } from './ReviewStatusUpdateManyWithWhereWithoutTransactionReviewStatusInput.schema';
import { ReviewStatusScalarWhereInputObjectSchema } from './ReviewStatusScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUncheckedUpdateManyWithoutTransactionReviewStatusNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              ReviewStatusCreateWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusCreateWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusUncheckedCreateWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              ReviewStatusCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusCreateOrConnectWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ReviewStatusUpsertWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusUpsertWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            ReviewStatusCreateManyTransactionReviewStatusInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
          z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
          z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
          z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema),
          z.lazy(() => ReviewStatusWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              ReviewStatusUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusUpdateWithWhereUniqueWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ReviewStatusUpdateManyWithWhereWithoutTransactionReviewStatusInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusUpdateManyWithWhereWithoutTransactionReviewStatusInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => ReviewStatusScalarWhereInputObjectSchema),
          z.lazy(() => ReviewStatusScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const ReviewStatusUncheckedUpdateManyWithoutTransactionReviewStatusNestedInputObjectSchema =
  Schema;
