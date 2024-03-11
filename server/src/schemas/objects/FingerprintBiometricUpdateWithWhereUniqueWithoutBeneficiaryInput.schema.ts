import { z } from 'zod';
import { FingerprintBiometricWhereUniqueInputObjectSchema } from './FingerprintBiometricWhereUniqueInput.schema';
import { FingerprintBiometricUpdateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUpdateWithoutBeneficiaryInput.schema';
import { FingerprintBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './FingerprintBiometricUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricUpdateWithWhereUniqueWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => FingerprintBiometricWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => FingerprintBiometricUpdateWithoutBeneficiaryInputObjectSchema,
        ),
        z.lazy(
          () =>
            FingerprintBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const FingerprintBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema =
  Schema;
