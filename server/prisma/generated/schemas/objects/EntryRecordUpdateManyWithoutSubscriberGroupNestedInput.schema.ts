import { z } from 'zod';
import { EntryRecordCreateWithoutSubscriberGroupInputObjectSchema } from './EntryRecordCreateWithoutSubscriberGroupInput.schema';
import { EntryRecordUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './EntryRecordUncheckedCreateWithoutSubscriberGroupInput.schema';
import { EntryRecordCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './EntryRecordCreateOrConnectWithoutSubscriberGroupInput.schema';
import { EntryRecordUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema } from './EntryRecordUpsertWithWhereUniqueWithoutSubscriberGroupInput.schema';
import { EntryRecordCreateManySubscriberGroupInputEnvelopeObjectSchema } from './EntryRecordCreateManySubscriberGroupInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema } from './EntryRecordUpdateWithWhereUniqueWithoutSubscriberGroupInput.schema';
import { EntryRecordUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema } from './EntryRecordUpdateManyWithWhereWithoutSubscriberGroupInput.schema';
import { EntryRecordScalarWhereInputObjectSchema } from './EntryRecordScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateManyWithoutSubscriberGroupNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => EntryRecordCreateWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordCreateWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              EntryRecordUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              EntryRecordCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordCreateOrConnectWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => EntryRecordCreateManySubscriberGroupInputEnvelopeObjectSchema,
        )
        .optional(),
      set: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              EntryRecordUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUpdateManyWithWhereWithoutSubscriberGroupInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => EntryRecordScalarWhereInputObjectSchema),
          z.lazy(() => EntryRecordScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordUpdateManyWithoutSubscriberGroupNestedInputObjectSchema =
  Schema;
