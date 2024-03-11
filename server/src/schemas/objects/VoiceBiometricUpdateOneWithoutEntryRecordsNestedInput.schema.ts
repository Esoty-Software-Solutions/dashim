import { z } from 'zod';
import { VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateOrConnectWithoutEntryRecordsInput.schema';
import { VoiceBiometricUpsertWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUpsertWithoutEntryRecordsInput.schema';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUpdateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedUpdateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricUpdateOneWithoutEntryRecordsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema,
          ),
          z.lazy(
            () =>
              VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            VoiceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => VoiceBiometricUpsertWithoutEntryRecordsInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => VoiceBiometricWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () => VoiceBiometricUpdateWithoutEntryRecordsInputObjectSchema,
          ),
          z.lazy(
            () =>
              VoiceBiometricUncheckedUpdateWithoutEntryRecordsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const VoiceBiometricUpdateOneWithoutEntryRecordsNestedInputObjectSchema =
  Schema;
