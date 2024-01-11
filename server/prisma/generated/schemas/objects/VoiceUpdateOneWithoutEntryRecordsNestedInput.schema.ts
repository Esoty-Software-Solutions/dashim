import { z } from 'zod';
import { VoiceCreateWithoutEntryRecordsInputObjectSchema } from './VoiceCreateWithoutEntryRecordsInput.schema';
import { VoiceUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './VoiceUncheckedCreateWithoutEntryRecordsInput.schema';
import { VoiceCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './VoiceCreateOrConnectWithoutEntryRecordsInput.schema';
import { VoiceUpsertWithoutEntryRecordsInputObjectSchema } from './VoiceUpsertWithoutEntryRecordsInput.schema';
import { VoiceWhereUniqueInputObjectSchema } from './VoiceWhereUniqueInput.schema';
import { VoiceUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceUpdateWithoutEntryRecordsInput.schema';
import { VoiceUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceUpdateOneWithoutEntryRecordsNestedInput> = z
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
    upsert: z
      .lazy(() => VoiceUpsertWithoutEntryRecordsInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VoiceWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VoiceUpdateWithoutEntryRecordsInputObjectSchema),
        z.lazy(() => VoiceUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const VoiceUpdateOneWithoutEntryRecordsNestedInputObjectSchema = Schema;
