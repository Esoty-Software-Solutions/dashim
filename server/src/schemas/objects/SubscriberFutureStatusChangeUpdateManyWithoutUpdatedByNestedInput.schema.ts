import { z } from 'zod';
import { SubscriberFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateOrConnectWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema } from './SubscriberFutureStatusChangeCreateManyUpdatedByInputEnvelope.schema';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';
import { SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeScalarWhereInputObjectSchema } from './SubscriberFutureStatusChangeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUpdateManyWithoutUpdatedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              SubscriberFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            SubscriberFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(
            () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(
            () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(
            () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(
            () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
          ),
          z
            .lazy(
              () => SubscriberFutureStatusChangeWhereUniqueInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeUpdateManyWithWhereWithoutUpdatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(
            () => SubscriberFutureStatusChangeScalarWhereInputObjectSchema,
          ),
          z
            .lazy(
              () => SubscriberFutureStatusChangeScalarWhereInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberFutureStatusChangeUpdateManyWithoutUpdatedByNestedInputObjectSchema =
  Schema;
