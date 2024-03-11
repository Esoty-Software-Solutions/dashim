import { z } from 'zod';
import { FaceBiometricCreateManyBeneficiaryInputObjectSchema } from './FaceBiometricCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricCreateManyBeneficiaryInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => FaceBiometricCreateManyBeneficiaryInputObjectSchema),
        z
          .lazy(() => FaceBiometricCreateManyBeneficiaryInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const FaceBiometricCreateManyBeneficiaryInputEnvelopeObjectSchema =
  Schema;
