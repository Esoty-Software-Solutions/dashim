import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutSubscriberGroupInputObjectSchema } from './EntryRecordUpdateWithoutSubscriberGroupInput.schema';
import { EntryRecordUncheckedUpdateWithoutSubscriberGroupInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutSubscriberGroupInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutSubscriberGroupInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EntryRecordUpdateWithoutSubscriberGroupInputObjectSchema),
        z.lazy(
          () =>
            EntryRecordUncheckedUpdateWithoutSubscriberGroupInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EntryRecordUpdateWithWhereUniqueWithoutSubscriberGroupInputObjectSchema =
  Schema;
