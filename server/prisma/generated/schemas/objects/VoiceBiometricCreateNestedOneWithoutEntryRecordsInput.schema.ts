import { z } from 'zod';
import { VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateOrConnectWithoutEntryRecordsInput.schema';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricCreateNestedOneWithoutEntryRecordsInput> =
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
      connect: z
        .lazy(() => VoiceBiometricWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const VoiceBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema =
  Schema;
