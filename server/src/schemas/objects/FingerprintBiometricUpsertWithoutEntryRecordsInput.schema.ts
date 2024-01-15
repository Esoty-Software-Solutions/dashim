import { z } from 'zod';
import { FingerprintBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUpdateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricUpsertWithoutEntryRecordsInput> =
  z
    .object({
      update: z.union([
        z.lazy(
          () => FingerprintBiometricUpdateWithoutEntryRecordsInputObjectSchema,
        ),
        z.lazy(
          () =>
            FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema,
        ),
        z.lazy(
          () =>
            FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintBiometricUpsertWithoutEntryRecordsInputObjectSchema =
  Schema;
