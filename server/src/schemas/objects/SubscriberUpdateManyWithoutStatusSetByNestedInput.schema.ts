import { z } from 'zod';
import { SubscriberCreateWithoutStatusSetByInputObjectSchema } from './SubscriberCreateWithoutStatusSetByInput.schema';
import { SubscriberUncheckedCreateWithoutStatusSetByInputObjectSchema } from './SubscriberUncheckedCreateWithoutStatusSetByInput.schema';
import { SubscriberCreateOrConnectWithoutStatusSetByInputObjectSchema } from './SubscriberCreateOrConnectWithoutStatusSetByInput.schema';
import { SubscriberUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema } from './SubscriberUpsertWithWhereUniqueWithoutStatusSetByInput.schema';
import { SubscriberCreateManyStatusSetByInputEnvelopeObjectSchema } from './SubscriberCreateManyStatusSetByInputEnvelope.schema';
import { SubscriberWhereUniqueInputObjectSchema } from './SubscriberWhereUniqueInput.schema';
import { SubscriberUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema } from './SubscriberUpdateWithWhereUniqueWithoutStatusSetByInput.schema';
import { SubscriberUpdateManyWithWhereWithoutStatusSetByInputObjectSchema } from './SubscriberUpdateManyWithWhereWithoutStatusSetByInput.schema';
import { SubscriberScalarWhereInputObjectSchema } from './SubscriberScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberUpdateManyWithoutStatusSetByNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => SubscriberCreateWithoutStatusSetByInputObjectSchema),
          z
            .lazy(() => SubscriberCreateWithoutStatusSetByInputObjectSchema)
            .array(),
          z.lazy(
            () => SubscriberUncheckedCreateWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUncheckedCreateWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => SubscriberCreateOrConnectWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberCreateOrConnectWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              SubscriberUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUpsertWithWhereUniqueWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => SubscriberCreateManyStatusSetByInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema),
          z.lazy(() => SubscriberWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              SubscriberUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUpdateWithWhereUniqueWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              SubscriberUpdateManyWithWhereWithoutStatusSetByInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                SubscriberUpdateManyWithWhereWithoutStatusSetByInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => SubscriberScalarWhereInputObjectSchema),
          z.lazy(() => SubscriberScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const SubscriberUpdateManyWithoutStatusSetByNestedInputObjectSchema =
  Schema;
