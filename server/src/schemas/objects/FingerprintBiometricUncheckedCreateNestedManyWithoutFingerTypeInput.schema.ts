import { z } from 'zod';
import { FingerprintBiometricCreateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricCreateWithoutFingerTypeInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutFingerTypeInput.schema';
import { FingerprintBiometricCreateOrConnectWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricCreateOrConnectWithoutFingerTypeInput.schema';
import { FingerprintBiometricCreateManyFingerTypeInputEnvelopeObjectSchema } from './FingerprintBiometricCreateManyFingerTypeInputEnvelope.schema';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricUncheckedCreateNestedManyWithoutFingerTypeInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => FingerprintBiometricCreateWithoutFingerTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintBiometricCreateWithoutFingerTypeInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              FingerprintBiometricUncheckedCreateWithoutFingerTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintBiometricUncheckedCreateWithoutFingerTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              FingerprintBiometricCreateOrConnectWithoutFingerTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintBiometricCreateOrConnectWithoutFingerTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            FingerprintBiometricCreateManyFingerTypeInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
          z
            .lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const FingerprintBiometricUncheckedCreateNestedManyWithoutFingerTypeInputObjectSchema =
  Schema;
