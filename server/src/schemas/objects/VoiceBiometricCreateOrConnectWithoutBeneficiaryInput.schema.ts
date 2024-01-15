import { z } from 'zod';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricCreateWithoutBeneficiaryInput.schema';
import { VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricCreateOrConnectWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () =>
            VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema =
  Schema;
