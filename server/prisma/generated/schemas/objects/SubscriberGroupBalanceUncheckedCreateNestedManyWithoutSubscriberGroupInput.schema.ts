import { z } from 'zod';
import { SubscriberGroupBalanceCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceCreateWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceUncheckedCreateWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceCreateOrConnectWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceCreateManySubscriberGroupInputEnvelopeObjectSchema } from './SubscriberGroupBalanceCreateManySubscriberGroupInputEnvelope.schema';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './SubscriberGroupBalanceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceUncheckedCreateNestedManyWithoutSubscriberGroupInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupBalanceCreateWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupBalanceCreateWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              SubscriberGroupBalanceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupBalanceUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupBalanceCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupBalanceCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            SubscriberGroupBalanceCreateManySubscriberGroupInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
          z
            .lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupBalanceUncheckedCreateNestedManyWithoutSubscriberGroupInputObjectSchema =
  Schema;
