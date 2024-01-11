import { z } from 'zod';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';
import { SubscriberGroupCreateWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupCreateWithoutEntryRecordsInput.schema';
import { SubscriberGroupUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateOrConnectWithoutEntryRecordsInput> =
  z
    .object({
      where: z.lazy(() => SubscriberGroupWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => SubscriberGroupCreateWithoutEntryRecordsInputObjectSchema),
        z.lazy(
          () =>
            SubscriberGroupUncheckedCreateWithoutEntryRecordsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const SubscriberGroupCreateOrConnectWithoutEntryRecordsInputObjectSchema =
  Schema;
