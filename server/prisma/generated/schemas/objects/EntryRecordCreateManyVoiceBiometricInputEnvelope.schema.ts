import { z } from 'zod';
import { EntryRecordCreateManyVoiceBiometricInputObjectSchema } from './EntryRecordCreateManyVoiceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManyVoiceBiometricInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => EntryRecordCreateManyVoiceBiometricInputObjectSchema),
        z
          .lazy(() => EntryRecordCreateManyVoiceBiometricInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const EntryRecordCreateManyVoiceBiometricInputEnvelopeObjectSchema =
  Schema;
