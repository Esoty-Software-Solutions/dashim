import { z } from 'zod';
import { ReviewStatusCreateWithoutUpdatedByInputObjectSchema } from './ReviewStatusCreateWithoutUpdatedByInput.schema';
import { ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema } from './ReviewStatusUncheckedCreateWithoutUpdatedByInput.schema';
import { ReviewStatusCreateOrConnectWithoutUpdatedByInputObjectSchema } from './ReviewStatusCreateOrConnectWithoutUpdatedByInput.schema';
import { ReviewStatusUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ReviewStatusUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { ReviewStatusCreateManyUpdatedByInputEnvelopeObjectSchema } from './ReviewStatusCreateManyUpdatedByInputEnvelope.schema';
import { ReviewStatusWhereUniqueInputObjectSchema } from './ReviewStatusWhereUniqueInput.schema';
import { ReviewStatusUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './ReviewStatusUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { ReviewStatusUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './ReviewStatusUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { ReviewStatusScalarWhereInputObjectSchema } from './ReviewStatusScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ReviewStatusUncheckedUpdateManyWithoutUpdatedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => ReviewStatusCreateWithoutUpdatedByInputObjectSchema),
          z
            .lazy(() => ReviewStatusCreateWithoutUpdatedByInputObjectSchema)
            .array(),
          z.lazy(
            () => ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusUncheckedCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => ReviewStatusCreateOrConnectWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusCreateOrConnectWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              ReviewStatusUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => ReviewStatusCreateManyUpdatedByInputEnvelopeObjectSchema)
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
              ReviewStatusUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              ReviewStatusUpdateManyWithWhereWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                ReviewStatusUpdateManyWithWhereWithoutUpdatedByInputObjectSchema,
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

export const ReviewStatusUncheckedUpdateManyWithoutUpdatedByNestedInputObjectSchema =
  Schema;
