import { z } from 'zod';
import { FaceBiometricCreateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricCreateWithoutBeneficiaryInput.schema';
import { FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUncheckedCreateWithoutBeneficiaryInput.schema';
import { FaceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './FaceBiometricCreateOrConnectWithoutBeneficiaryInput.schema';
import { FaceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInput.schema';
import { FaceBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema } from './FaceBiometricCreateManyBeneficiaryInputEnvelope.schema';
import { FaceBiometricWhereUniqueInputObjectSchema } from './FaceBiometricWhereUniqueInput.schema';
import { FaceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInput.schema';
import { FaceBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema } from './FaceBiometricUpdateManyWithWhereWithoutBeneficiaryInput.schema';
import { FaceBiometricScalarWhereInputObjectSchema } from './FaceBiometricScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricUpdateManyWithoutBeneficiaryNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => FaceBiometricCreateWithoutBeneficiaryInputObjectSchema),
          z
            .lazy(() => FaceBiometricCreateWithoutBeneficiaryInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FaceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              FaceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FaceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              FaceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FaceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => FaceBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
          z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
          z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
          z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema),
          z.lazy(() => FaceBiometricWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              FaceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FaceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              FaceBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                FaceBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => FaceBiometricScalarWhereInputObjectSchema),
          z.lazy(() => FaceBiometricScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const FaceBiometricUpdateManyWithoutBeneficiaryNestedInputObjectSchema =
  Schema;
