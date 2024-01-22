import { z } from 'zod';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricCreateWithoutEntryRecordsInput.schema';
import { VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricCreateOrConnectWithoutEntryRecordsInput> =
  z
    .object({
      where: z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => VoiceBiometricCreateWithoutEntryRecordsInputObjectSchema),
        z.lazy(
          () =>
            VoiceBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema =
  Schema;
