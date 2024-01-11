import { z } from 'zod';
import { FaceUpdateWithoutEntryRecordsInputObjectSchema } from './FaceUpdateWithoutEntryRecordsInput.schema';
import { FaceUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FaceUncheckedUpdateWithoutEntryRecordsInput.schema';
import { FaceCreateWithoutEntryRecordsInputObjectSchema } from './FaceCreateWithoutEntryRecordsInput.schema';
import { FaceUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FaceUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceUpsertWithoutEntryRecordsInput> = z
  .object({
    update: z.union([
      z.lazy(() => FaceUpdateWithoutEntryRecordsInputObjectSchema),
      z.lazy(() => FaceUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => FaceCreateWithoutEntryRecordsInputObjectSchema),
      z.lazy(() => FaceUncheckedCreateWithoutEntryRecordsInputObjectSchema),
    ]),
  })
  .strict();

export const FaceUpsertWithoutEntryRecordsInputObjectSchema = Schema;
