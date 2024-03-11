import { z } from 'zod';
import { EntryRecordCreateManyIdCardBiometricInputObjectSchema } from './EntryRecordCreateManyIdCardBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManyIdCardBiometricInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => EntryRecordCreateManyIdCardBiometricInputObjectSchema),
        z
          .lazy(() => EntryRecordCreateManyIdCardBiometricInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const EntryRecordCreateManyIdCardBiometricInputEnvelopeObjectSchema =
  Schema;
