import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutSubscriberGroupInputObjectSchema } from './EntryRecordUpdateWithoutSubscriberGroupInput.schema';
import { EntryRecordUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutSubscriberGroupInput.schema';
import { EntryRecordCreateWithoutSubscriberGroupInputObjectSchema } from './EntryRecordCreateWithoutSubscriberGroupInput.schema';
import { EntryRecordUncheckedCreateWithoutSubscriberGroupInputObjectSchema } from './EntryRecordUncheckedCreateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EntryRecordUpdateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedCreateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpsertWithWhereUniqueWithoutSubscriberGroupInputObjectSchema =
  Schema;
