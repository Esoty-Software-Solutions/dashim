import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutEntryRecordsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricCreateOrConnectWithoutEntryRecordsInput> =
  z
    .object({
      where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
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

export const FingerprintBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema =
  Schema;
