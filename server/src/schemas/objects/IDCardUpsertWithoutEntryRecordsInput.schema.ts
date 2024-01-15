import { z } from 'zod';
import { IDCardUpdateWithoutEntryRecordsInputObjectSchema } from './IDCardUpdateWithoutEntryRecordsInput.schema';
import { IDCardUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './IDCardUncheckedUpdateWithoutEntryRecordsInput.schema';
import { IDCardCreateWithoutEntryRecordsInputObjectSchema } from './IDCardCreateWithoutEntryRecordsInput.schema';
import { IDCardUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './IDCardUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.IDCardUpsertWithoutEntryRecordsInput> = z
  .object({
    update: z.union([
      z.lazy(() => IDCardUpdateWithoutEntryRecordsInputObjectSchema),
      z.lazy(() => IDCardUncheckedUpdateWithoutEntryRecordsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => IDCardCreateWithoutEntryRecordsInputObjectSchema),
      z.lazy(() => IDCardUncheckedCreateWithoutEntryRecordsInputObjectSchema),
    ]),
  })
  .strict();

export const IDCardUpsertWithoutEntryRecordsInputObjectSchema = Schema;
