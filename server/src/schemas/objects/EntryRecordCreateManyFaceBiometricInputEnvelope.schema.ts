import { z } from 'zod';
import { EntryRecordCreateManyFaceBiometricInputObjectSchema } from './EntryRecordCreateManyFaceBiometricInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManyFaceBiometricInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => EntryRecordCreateManyFaceBiometricInputObjectSchema),
        z
          .lazy(() => EntryRecordCreateManyFaceBiometricInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const EntryRecordCreateManyFaceBiometricInputEnvelopeObjectSchema =
  Schema;
