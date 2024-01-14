import { z } from 'zod';
import { VoiceBiometricCreateManyBeneficiaryInputObjectSchema } from './VoiceBiometricCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.VoiceBiometricCreateManyBeneficiaryInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => VoiceBiometricCreateManyBeneficiaryInputObjectSchema),
        z
          .lazy(() => VoiceBiometricCreateManyBeneficiaryInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const VoiceBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema =
  Schema;
