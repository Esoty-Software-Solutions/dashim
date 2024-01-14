import { z } from 'zod';
import { FingerprintBiometricScalarWhereInputObjectSchema } from './FingerprintBiometricScalarWhereInput.schema';
import { FingerprintBiometricUpdateManyMutationInputObjectSchema } from './FingerprintBiometricUpdateManyMutationInput.schema';
import { FingerprintBiometricUncheckedUpdateManyWithoutFingerprintInputObjectSchema } from './FingerprintBiometricUncheckedUpdateManyWithoutFingerprintInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricUpdateManyWithWhereWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => FingerprintBiometricScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => FingerprintBiometricUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            FingerprintBiometricUncheckedUpdateManyWithoutFingerprintInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema =
  Schema;
