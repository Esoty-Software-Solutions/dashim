import { z } from 'zod';
import { SubscriberGroupCreateWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupCreateWithoutEntryRecordsInput.schema';
import { SubscriberGroupUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutEntryRecordsInput.schema';
import { SubscriberGroupCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutEntryRecordsInput.schema';
import { SubscriberGroupUpsertWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupUpsertWithoutEntryRecordsInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupUpdateWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupUpdateWithoutEntryRecordsInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpdateOneRequiredWithoutEntryRecordsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => SubscriberGroupCreateWithoutEntryRecordsInputObjectSchema,
          ),
          z.lazy(
            () =>
              SubscriberGroupUncheckedCreateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            SubscriberGroupCreateOrConnectWithoutEntryRecordsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => SubscriberGroupUpsertWithoutEntryRecordsInputObjectSchema)
        .optional(),
      connect: z
        .lazy(() => SubscriberGroupWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => SubscriberGroupUpdateWithoutEntryRecordsInputObjectSchema,
          ),
          z.lazy(
            () =>
              SubscriberGroupUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const SubscriberGroupUpdateOneRequiredWithoutEntryRecordsNestedInputObjectSchema =
  Schema;
