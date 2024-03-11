import { z } from 'zod';
import { FingerprintBiometricCreateManyFingerTypeInputObjectSchema } from './FingerprintBiometricCreateManyFingerTypeInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricCreateManyFingerTypeInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FingerprintBiometricCreateManyFingerTypeInputObjectSchema),
        z
          .lazy(() => FingerprintBiometricCreateManyFingerTypeInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const FingerprintBiometricCreateManyFingerTypeInputEnvelopeObjectSchema =
  Schema;
