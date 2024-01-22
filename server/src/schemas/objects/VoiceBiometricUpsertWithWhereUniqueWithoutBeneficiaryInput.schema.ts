import { z } from 'zod';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricUpdateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUpdateWithoutBeneficiaryInput.schema';
import { VoiceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUncheckedUpdateWithoutBeneficiaryInput.schema';
import { VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricCreateWithoutBeneficiaryInput.schema';
import { VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => VoiceBiometricUpdateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () =>
            VoiceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => VoiceBiometricCreateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () =>
            VoiceBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema =
  Schema;
