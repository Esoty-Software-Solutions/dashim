import { z } from 'zod';
import { VoiceUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceUpdateWithoutEntryRecordsInput.schema';
import { VoiceUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceUncheckedUpdateWithoutEntryRecordsInput.schema';
import { VoiceCreateWithoutEntryRecordsInputObjectSchema } from './VoiceCreateWithoutEntryRecordsInput.schema';
import { VoiceUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './VoiceUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceUpsertWithoutEntryRecordsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VoiceUpdateWithoutEntryRecordsInputObjectSchema),
      z.lazy(() => VoiceUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VoiceCreateWithoutEntryRecordsInputObjectSchema),
      z.lazy(() => VoiceUncheckedCreateWithoutEntryRecordsInputObjectSchema),
    ]),
  })
  .strict();

export const VoiceUpsertWithoutEntryRecordsInputObjectSchema = Schema;
