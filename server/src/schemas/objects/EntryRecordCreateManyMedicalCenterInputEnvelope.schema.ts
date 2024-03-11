import { z } from 'zod';
import { EntryRecordCreateManyMedicalCenterInputObjectSchema } from './EntryRecordCreateManyMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateManyMedicalCenterInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => EntryRecordCreateManyMedicalCenterInputObjectSchema),
        z
          .lazy(() => EntryRecordCreateManyMedicalCenterInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const EntryRecordCreateManyMedicalCenterInputEnvelopeObjectSchema =
  Schema;
