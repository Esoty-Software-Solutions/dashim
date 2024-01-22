import { z } from 'zod';
import { SubscriberFutureStatusChangeCreateWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeCreateWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeUncheckedCreateWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeUncheckedCreateWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeCreateOrConnectWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeCreateOrConnectWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeCreateManySubscriberInputEnvelopeObjectSchema } from './SubscriberFutureStatusChangeCreateManySubscriberInputEnvelope.schema';
import { SubscriberFutureStatusChangeWhereUniqueInputObjectSchema } from './SubscriberFutureStatusChangeWhereUniqueInput.schema';
import { SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeUpdateManyWithWhereWithoutSubscriberInputObjectSchema } from './SubscriberFutureStatusChangeUpdateManyWithWhereWithoutSubscriberInput.schema';
import { SubscriberFutureStatusChangeScalarWhereInputObjectSchema } from './SubscriberFutureStatusChangeScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberFutureStatusChangeUncheckedUpdateManyWithoutSubscriberNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeUpsertWithWhereUniqueWithoutSubscriberInputObjectSchema,
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
              SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeUpdateWithWhereUniqueWithoutSubscriberInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriberFutureStatusChangeUpdateManyWithWhereWithoutSubscriberInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberFutureStatusChangeUpdateManyWithWhereWithoutSubscriberInputObjectSchema,
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

export const SubscriberFutureStatusChangeUncheckedUpdateManyWithoutSubscriberNestedInputObjectSchema =
  Schema;
