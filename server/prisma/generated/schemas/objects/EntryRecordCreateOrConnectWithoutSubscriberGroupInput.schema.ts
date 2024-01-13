import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutSubscriberGroupInputObjectSchema } from './EntryRecordCreateWithoutSubscriberGroupInput.schema';
import { EntryRecordUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './EntryRecordUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordCreateOrConnectWithoutSubscriberGroupInputObjectSchema =
  Schema;
