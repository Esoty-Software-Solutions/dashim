import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateWithoutVoiceInputObjectSchema } from './EntryRecordUpdateWithoutVoiceInput.schema';
import { EntryRecordUncheckedUpdateWithoutVoiceInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordUpdateWithWhereUniqueWithoutVoiceInput> =
  z
    .object({
      where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EntryRecordUpdateWithoutVoiceInputObjectSchema),
        z.lazy(() => EntryRecordUncheckedUpdateWithoutVoiceInputObjectSchema),
      ]),
    })
    .strict();

export const EntryRecordUpdateWithWhereUniqueWithoutVoiceInputObjectSchema =
  Schema;
