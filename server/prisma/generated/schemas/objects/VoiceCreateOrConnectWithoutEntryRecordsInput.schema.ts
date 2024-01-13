import { z } from 'zod';
import { VoiceWhereUniqueInputObjectSchema } from './VoiceWhereUniqueInput.schema';
import { VoiceCreateWithoutEntryRecordsInputObjectSchema } from './VoiceCreateWithoutEntryRecordsInput.schema';
import { VoiceUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './VoiceUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceCreateOrConnectWithoutEntryRecordsInput> = z
  .object({
    where: z.lazy(() => VoiceWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VoiceCreateWithoutEntryRecordsInputObjectSchema),
      z.lazy(() => VoiceUncheckedCreateWithoutEntryRecordsInputObjectSchema),
    ]),
  })
  .strict();

export const VoiceCreateOrConnectWithoutEntryRecordsInputObjectSchema = Schema;
