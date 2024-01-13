import { z } from 'zod';
import { EntryRecordCreateManyFingerprintBiometricInputObjectSchema } from './EntryRecordCreateManyFingerprintBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManyFingerprintBiometricInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => EntryRecordCreateManyFingerprintBiometricInputObjectSchema,
        ),
        z
          .lazy(
            () => EntryRecordCreateManyFingerprintBiometricInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const EntryRecordCreateManyFingerprintBiometricInputEnvelopeObjectSchema =
  Schema;
