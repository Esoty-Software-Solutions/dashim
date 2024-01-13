import { z } from 'zod';
import { FingerprintUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintUpdateWithoutEntryRecordsInput.schema';
import { FingerprintUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintUncheckedUpdateWithoutEntryRecordsInput.schema';
import { FingerprintCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintCreateWithoutEntryRecordsInput.schema';
import { FingerprintUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintUpsertWithoutEntryRecordsInput> = z
  .object({
    update: z.union([
      z.lazy(() => FingerprintUpdateWithoutEntryRecordsInputObjectSchema),
      z.lazy(
        () => FingerprintUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => FingerprintCreateWithoutEntryRecordsInputObjectSchema),
      z.lazy(
        () => FingerprintUncheckedCreateWithoutEntryRecordsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const FingerprintUpsertWithoutEntryRecordsInputObjectSchema = Schema;
