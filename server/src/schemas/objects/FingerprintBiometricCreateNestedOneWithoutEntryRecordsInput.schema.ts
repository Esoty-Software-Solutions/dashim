import { z } from 'zod';
import { FingerprintBiometricCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutEntryRecordsInput.schema';
import { FingerprintBiometricCreateOrConnectWithoutEntryRecordsInputObjectSchema } from './FingerprintBiometricCreateOrConnectWithoutEntryRecordsInput.schema';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricCreateNestedOneWithoutEntryRecordsInput> =
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
      connect: z
        .lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const FingerprintBiometricCreateNestedOneWithoutEntryRecordsInputObjectSchema =
  Schema;
