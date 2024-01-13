import { z } from 'zod';
import { EntryRecordCreateWithoutSubscriberGroupInputObjectSchema } from './EntryRecordCreateWithoutSubscriberGroupInput.schema';
import { EntryRecordUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './EntryRecordUncheckedCreateWithoutSubscriberGroupInput.schema';
import { EntryRecordCreateOrConnectWithoutSubscriberGroupInputObjectSchema } from './EntryRecordCreateOrConnectWithoutSubscriberGroupInput.schema';
import { EntryRecordCreateManySubscriberGroupInputEnvelopeObjectSchema } from './EntryRecordCreateManySubscriberGroupInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateNestedManyWithoutSubscriberGroupInput> =
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
      createMany: z
        .lazy(
          () => EntryRecordCreateManySubscriberGroupInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordCreateNestedManyWithoutSubscriberGroupInputObjectSchema =
  Schema;
