import { z } from 'zod';
import { SubscriberFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateOrConnectWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema } from './SubscriberFutureStatusChangeCreateManyCreatedByInputEnvelope.schema';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';
import { SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeScalarWhereInputObjectSchema } from './SubscriberFutureStatusChangeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUpdateManyWithoutCreatedByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              SubscriberFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            SubscriberFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema,
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
              SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeUpdateManyWithWhereWithoutCreatedByInputObjectSchema,
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

export const SubscriberFutureStatusChangeUpdateManyWithoutCreatedByNestedInputObjectSchema =
  Schema;
