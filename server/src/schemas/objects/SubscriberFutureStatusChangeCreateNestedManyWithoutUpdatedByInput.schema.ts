import { z } from 'zod';
import { SubscriberFutureStatusChangeCreateWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeCreateOrConnectWithoutUpdatedByInputObjectSchema } from './SubscriberFutureStatusChangeCreateOrConnectWithoutUpdatedByInput.schema';
import { SubscriberFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema } from './SubscriberFutureStatusChangeCreateManyUpdatedByInputEnvelope.schema';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeCreateNestedManyWithoutUpdatedByInput> =
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
      createMany: z
        .lazy(
          () =>
            SubscriberFutureStatusChangeCreateManyUpdatedByInputEnvelopeObjectSchema,
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

export const SubscriberFutureStatusChangeCreateNestedManyWithoutUpdatedByInputObjectSchema =
  Schema;
