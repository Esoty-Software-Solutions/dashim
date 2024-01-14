import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricCreateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricCreateWithoutFingerTypeInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricCreateOrConnectWithoutFingerTypeInput> =
  z
    .object({
      where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(
          () => FingerprintBiometricCreateWithoutFingerTypeInputObjectSchema,
        ),
        z.lazy(
          () =>
            FingerprintBiometricUncheckedCreateWithoutFingerTypeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintBiometricCreateOrConnectWithoutFingerTypeInputObjectSchema =
  Schema;
