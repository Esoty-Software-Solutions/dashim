import { z } from 'zod';
import { SubscriberFutureStatusChangeCreateWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeCreateOrConnectWithoutCreatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateOrConnectWithoutCreatedByInput.schema';
import { SubscriberFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema } from './SubscriberFutureStatusChangeCreateManyCreatedByInputEnvelope.schema';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeCreateNestedManyWithoutCreatedByInput> =
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
      createMany: z
        .lazy(
          () =>
            SubscriberFutureStatusChangeCreateManyCreatedByInputEnvelopeObjectSchema,
        )
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
    })
    .strict();

export const SubscriberFutureStatusChangeCreateNestedManyWithoutCreatedByInputObjectSchema =
  Schema;
