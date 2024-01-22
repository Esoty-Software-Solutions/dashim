import { z } from 'zod';
import { FingerprintBiometricCreateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricCreateWithoutFingerTypeInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutFingerTypeInput.schema';
import { FingerprintBiometricCreateOrConnectWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricCreateOrConnectWithoutFingerTypeInput.schema';
import { FingerprintBiometricUpsertWithWhereUniqueWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUpsertWithWhereUniqueWithoutFingerTypeInput.schema';
import { FingerprintBiometricCreateManyFingerTypeInputEnvelopeObjectSchema } from './FingerprintBiometricCreateManyFingerTypeInputEnvelope.schema';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricUpdateWithWhereUniqueWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUpdateWithWhereUniqueWithoutFingerTypeInput.schema';
import { FingerprintBiometricUpdateManyWithWhereWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUpdateManyWithWhereWithoutFingerTypeInput.schema';
import { FingerprintBiometricScalarWhereInputObjectSchema } from './FingerprintBiometricScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricUpdateManyWithoutFingerTypeNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              FingerprintBiometricUpsertWithWhereUniqueWithoutFingerTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintBiometricUpsertWithWhereUniqueWithoutFingerTypeInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
          z
            .lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
          z
            .lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
          z
            .lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
          z
            .lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema)
            .array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              FingerprintBiometricUpdateWithWhereUniqueWithoutFingerTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintBiometricUpdateWithWhereUniqueWithoutFingerTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              FingerprintBiometricUpdateManyWithWhereWithoutFingerTypeInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintBiometricUpdateManyWithWhereWithoutFingerTypeInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FingerprintBiometricScalarWhereInputObjectSchema),
          z
            .lazy(() => FingerprintBiometricScalarWhereInputObjectSchema)
            .array(),
        ])
        .optional(),
    })
    .strict();

export const FingerprintBiometricUpdateManyWithoutFingerTypeNestedInputObjectSchema =
  Schema;
