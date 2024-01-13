import { z } from 'zod';
import { SubscriberGroupUpdateWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupUpdateWithoutEntryRecordsInput.schema';
import { SubscriberGroupUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupUncheckedUpdateWithoutEntryRecordsInput.schema';
import { SubscriberGroupCreateWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupCreateWithoutEntryRecordsInput.schema';
import { SubscriberGroupUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupUpsertWithoutEntryRecordsInput> =
  z
    .object({
      update: z.union([
        z.lazy(() => SubscriberGroupUpdateWithoutEntryRecordsInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutEntryRecordsInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedCreateWithoutEntryRecordsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupUpsertWithoutEntryRecordsInputObjectSchema = Schema;
