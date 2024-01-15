import { z } from 'zod';
import { FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricCreateWithoutBeneficiaryInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutBeneficiaryInput.schema';
import { FingerprintBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricCreateOrConnectWithoutBeneficiaryInput.schema';
import { FingerprintBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUpsertWithWhereUniqueWithoutBeneficiaryInput.schema';
import { FingerprintBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema } from './FingerprintBiometricCreateManyBeneficiaryInputEnvelope.schema';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUpdateWithWhereUniqueWithoutBeneficiaryInput.schema';
import { FingerprintBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUpdateManyWithWhereWithoutBeneficiaryInput.schema';
import { FingerprintBiometricScalarWhereInputObjectSchema } from './FingerprintBiometricScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricUpdateManyWithoutBeneficiaryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              FingerprintBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              FingerprintBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              FingerprintBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            FingerprintBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema,
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
              FingerprintBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              FingerprintBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FingerprintBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema,
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

export const FingerprintBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema =
  Schema;
