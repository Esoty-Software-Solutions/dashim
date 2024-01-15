import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricUpdateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUpdateWithoutBeneficiaryInput.schema';
import { FingerprintBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUncheckedUpdateWithoutBeneficiaryInput.schema';
import { FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricCreateWithoutBeneficiaryInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricUpsertWithWhereUniqueWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => FingerprintBiometricUpdateWithoutBeneficiaryInputObjectSchema,
        ),
        z.lazy(
          () =>
            FingerprintBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema,
        ),
        z.lazy(
          () =>
            FingerprintBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintBiometricUpsertWithWhereUniqueWithoutBeneficiaryInputObjectSchema =
  Schema;
