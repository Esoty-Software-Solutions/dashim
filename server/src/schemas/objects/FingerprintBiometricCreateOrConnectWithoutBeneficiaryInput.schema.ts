import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricCreateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricCreateWithoutBeneficiaryInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricCreateOrConnectWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
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

export const FingerprintBiometricCreateOrConnectWithoutBeneficiaryInputObjectSchema =
  Schema;
