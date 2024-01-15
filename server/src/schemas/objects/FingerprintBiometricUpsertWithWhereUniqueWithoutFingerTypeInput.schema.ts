import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricUpdateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUpdateWithoutFingerTypeInput.schema';
import { FingerprintBiometricUncheckedUpdateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedUpdateWithoutFingerTypeInput.schema';
import { FingerprintBiometricCreateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricCreateWithoutFingerTypeInput.schema';
import { FingerprintBiometricUncheckedCreateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedCreateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricUpsertWithWhereUniqueWithoutFingerTypeInput> =
  z
    .object({
      where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => FingerprintBiometricUpdateWithoutFingerTypeInputObjectSchema,
        ),
        z.lazy(
          () =>
            FingerprintBiometricUncheckedUpdateWithoutFingerTypeInputObjectSchema,
        ),
      ]),
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

export const FingerprintBiometricUpsertWithWhereUniqueWithoutFingerTypeInputObjectSchema =
  Schema;
