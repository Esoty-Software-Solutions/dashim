import { z } from 'zod';
import { SubscriberGroupCreateWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupCreateWithoutEntryRecordsInput.schema';
import { SubscriberGroupUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupUncheckedCreateWithoutEntryRecordsInput.schema';
import { SubscriberGroupCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './SubscriberGroupCreateOrConnectWithoutEntryRecordsInput.schema';
import { SubscriberGroupWhereUniqueInputObjectSchema } from './SubscriberGroupWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.SubscriberGroupCreateNestedOneWithoutEntryRecordsInput> =
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
      connect: z
        .lazy(() => SubscriberGroupWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const SubscriberGroupCreateNestedOneWithoutEntryRecordsInputObjectSchema =
  Schema;
