import { z } from 'zod';
import { SubscriberGroupBalanceCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceCreateWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceUncheckedCreateWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceCreateOrConnectWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceUpsertWithWhereUniqueWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceCreateManySubscriberGroupInputEnvelopeObjectSchema } from './SubscriberGroupBalanceCreateManySubscriberGroupInputEnvelope.schema';
import { SubscriberGroupBalanceWhereUniqueInputObjectSchema } from './SubscriberGroupBalanceWhereUniqueInput.schema';
import { SubscriberGroupBalanceUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceUpdateWithWhereUniqueWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema } from './SubscriberGroupBalanceUpdateManyWithWhereWithoutSubscriberGroupInput.schema';
import { SubscriberGroupBalanceScalarWhereInputObjectSchema } from './SubscriberGroupBalanceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupBalanceUncheckedUpdateManyWithoutSubscriberGroupNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupBalanceUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupBalanceUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
          z
            .lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
          z
            .lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
          z
            .lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema),
          z
            .lazy(() => SubscriberGroupBalanceWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupBalanceUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupBalanceUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriberGroupBalanceUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberGroupBalanceUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubscriberGroupBalanceScalarWhereInputObjectSchema),
          z
            .lazy(() => SubscriberGroupBalanceScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupBalanceUncheckedUpdateManyWithoutSubscriberGroupNestedInputObjectSchema =
  Schema;
