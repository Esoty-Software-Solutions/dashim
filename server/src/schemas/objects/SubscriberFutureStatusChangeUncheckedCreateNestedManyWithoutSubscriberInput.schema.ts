import { z } from 'zod';
import { SubscriberFutureStatusChangeCreateWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeCreateWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeCreateOrConnectWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeCreateOrConnectWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeCreateManySubscriberInputEnvelopeObjectSchema } from './SubscriberFutureStatusChangeCreateManySubscriberInputEnvelope.schema';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUncheckedCreateNestedManyWithoutSubscriberInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeCreateWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeCreateWithoutSubscriberInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              SubscriberFutureStatusChangeUncheckedCreateWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeUncheckedCreateWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeCreateOrConnectWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeCreateOrConnectWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            SubscriberFutureStatusChangeCreateManySubscriberInputEnvelopeObjectSchema,
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

export const SubscriberFutureStatusChangeUncheckedCreateNestedManyWithoutSubscriberInputObjectSchema =
  Schema;
