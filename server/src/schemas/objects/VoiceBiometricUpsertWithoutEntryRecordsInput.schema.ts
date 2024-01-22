import { z } from 'zod';
import { VoiceBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUpdateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';
import { VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricUpsertWithoutEntryRecordsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VoiceBiometricUpdateWithoutEntryRecordsInputObjectSchema),
      z.lazy(
        () => VoiceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema),
      z.lazy(
        () => VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const VoiceBiometricUpsertWithoutEntryRecordsInputObjectSchema = Schema;
