import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutVoiceInputObjectSchema } from './EntryRecordUpdateWithoutVoiceInput.schema';
import { EntryRecordUncheckedUpdateWithoutVoiceInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutVoiceInput.schema';
import { EntryRecordCreateWithoutVoiceInputObjectSchema } from './EntryRecordCreateWithoutVoiceInput.schema';
import { EntryRecordUncheckedCreateWithoutVoiceInputObjectSchema } from './EntryRecordUncheckedCreateWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpsertWithWhereUniqueWithoutVoiceInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EntryRecordUpdateWithoutVoiceInputObjectSchema),
        z.lazy(() => EntryRecordUncheckedUpdateWithoutVoiceInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => EntryRecordCreateWithoutVoiceInputObjectSchema),
        z.lazy(() => EntryRecordUncheckedCreateWithoutVoiceInputObjectSchema),
      ]),
    })
    .strict();

export const EntryRecordUpsertWithWhereUniqueWithoutVoiceInputObjectSchema =
  Schema;
