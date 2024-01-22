import { z } from 'zod';
import { VoiceBiometricWhereUniqueInputObjectSchema } from './VoiceBiometricWhereUniqueInput.schema';
import { VoiceBiometricUpdateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUpdateWithoutBeneficiaryInput.schema';
import { VoiceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema } from './VoiceBiometricUncheckedUpdateWithoutBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => VoiceBiometricWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => VoiceBiometricUpdateWithoutBeneficiaryInputObjectSchema),
        z.lazy(
          () =>
            VoiceBiometricUncheckedUpdateWithoutBeneficiaryInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceBiometricUpdateWithWhereUniqueWithoutBeneficiaryInputObjectSchema =
  Schema;
