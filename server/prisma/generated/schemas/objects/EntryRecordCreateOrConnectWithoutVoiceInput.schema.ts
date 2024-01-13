import { z } from 'zod';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordCreateWithoutVoiceInputObjectSchema } from './EntryRecordCreateWithoutVoiceInput.schema';
import { EntryRecordUncheckedCreateWithoutVoiceInputObjectSchema } from './EntryRecordUncheckedCreateWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateOrConnectWithoutVoiceInput> = z
  .object({
    where: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EntryRecordCreateWithoutVoiceInputObjectSchema),
      z.lazy(() => EntryRecordUncheckedCreateWithoutVoiceInputObjectSchema),
    ]),
  })
  .strict();

export const EntryRecordCreateOrConnectWithoutVoiceInputObjectSchema = Schema;
