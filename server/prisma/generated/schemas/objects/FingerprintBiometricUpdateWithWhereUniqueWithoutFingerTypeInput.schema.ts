import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricUpdateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUpdateWithoutFingerTypeInput.schema';
import { FingerprintBiometricUncheckedUpdateWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedUpdateWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricUpdateWithWhereUniqueWithoutFingerTypeInput> =
  z
    .object({
      where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => FingerprintBiometricUpdateWithoutFingerTypeInputObjectSchema,
        ),
        z.lazy(
          () =>
            FingerprintBiometricUncheckedUpdateWithoutFingerTypeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintBiometricUpdateWithWhereUniqueWithoutFingerTypeInputObjectSchema =
  Schema;
