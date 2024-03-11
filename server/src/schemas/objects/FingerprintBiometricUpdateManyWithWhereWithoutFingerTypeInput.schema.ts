import { z } from 'zod';
import { FingerprintBiometricScalarWhereInputObjectSchema } from './FingerprintBiometricScalarWhereInput.schema';
import { FingerprintBiometricUpdateManyMutationInputObjectSchema } from './FingerprintBiometricUpdateManyMutationInput.schema';
import { FingerprintBiometricUncheckedUpdateManyWithoutFingerTypeInputObjectSchema } from './FingerprintBiometricUncheckedUpdateManyWithoutFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricUpdateManyWithWhereWithoutFingerTypeInput> =
  z
    .object({
      where: z.lazy(() => FingerprintBiometricScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => FingerprintBiometricUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            FingerprintBiometricUncheckedUpdateManyWithoutFingerTypeInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintBiometricUpdateManyWithWhereWithoutFingerTypeInputObjectSchema =
  Schema;
