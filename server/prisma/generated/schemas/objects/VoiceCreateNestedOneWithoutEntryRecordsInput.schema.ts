import { z } from 'zod';
import { VoiceCreateWithoutEntryRecordsInputObjectSchema } from './VoiceCreateWithoutEntryRecordsInput.schema';
import { VoiceUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './VoiceUncheckedCreateWithoutEntryRecordsInput.schema';
import { VoiceCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './VoiceCreateOrConnectWithoutEntryRecordsInput.schema';
import { VoiceWhereUniqueInputObjectSchema } from './VoiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceCreateNestedOneWithoutEntryRecordsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VoiceCreateWithoutEntryRecordsInputObjectSchema),
        z.lazy(() => VoiceUncheckedCreateWithoutEntryRecordsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => VoiceCreateOrConnectWithoutEntryRecordsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => VoiceWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const VoiceCreateNestedOneWithoutEntryRecordsInputObjectSchema = Schema;
