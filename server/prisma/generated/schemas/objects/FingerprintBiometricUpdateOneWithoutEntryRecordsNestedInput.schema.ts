import { z } from 'zod';
import { FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateOrConnectWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUpsertWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUpsertWithoutEntryRecordsInput.schema';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUpdateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricUpdateOneWithoutEntryRecordsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema,
          ),
          z.lazy(
            () =>
              FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            FingerprintBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => FingerprintBiometricUpsertWithoutEntryRecordsInputObjectSchema,
        )
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              FingerprintBiometricUpdateWithoutEntryRecordsInputObjectSchema,
          ),
          z.lazy(
            () =>
              FingerprintBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const FingerprintBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema =
  Schema;
