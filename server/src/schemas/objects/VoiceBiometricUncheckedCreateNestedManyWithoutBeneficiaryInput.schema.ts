import { z } from 'zod';
import { VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricCreateWithoutBeneficiaryInput.schema';
import { VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutBeneficiaryInput.schema';
import { VoiceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricCreateOrConnectWithoutBeneficiaryInput.schema';
import { VoiceBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema } from './VoiceBiometricCreateManyBeneficiaryInputEnvelope.schema';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema),
          z
            .lazy(() => VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema)
            .array(),
          z.lazy(
            () =>
              VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              VoiceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                VoiceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => VoiceBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
          z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const VoiceBiometricUncheckedCreateNestedManyWithoutBeneficiaryInputObjectSchema =
  Schema;
