import { z } from 'zod';
import { VoiceBiometricScalarWhereInputObjectSchema } from './VoiceBiometricScalarWhereInput.schema';
import { VoiceBiometricUpdateManyMutationInputObjectSchema } from './VoiceBiometricUpdateManyMutationInput.schema';
import { VoiceBiometricUncheckedUpdateManyWithoutVoiceInputObjectSchema } from './VoiceBiometricUncheckedUpdateManyWithoutVoiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricUpdateManyWithWhereWithoutBeneficiaryInput> =
  z
    .object({
      where: z.lazy(() => VoiceBiometricScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => VoiceBiometricUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => VoiceBiometricUncheckedUpdateManyWithoutVoiceInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const VoiceBiometricUpdateManyWithWhereWithoutBeneficiaryInputObjectSchema =
  Schema;
