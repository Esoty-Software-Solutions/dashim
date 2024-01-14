import { z } from 'zod';
import { FingerprintBiometricCreateManyBeneficiaryInputObjectSchema } from './FingerprintBiometricCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FingerprintBiometricCreateManyBeneficiaryInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => FingerprintBiometricCreateManyBeneficiaryInputObjectSchema,
        ),
        z
          .lazy(
            () => FingerprintBiometricCreateManyBeneficiaryInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const FingerprintBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema =
  Schema;
