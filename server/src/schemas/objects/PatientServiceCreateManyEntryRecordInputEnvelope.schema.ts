import { z } from 'zod';
import { PatientServiceCreateManyEntryRecordInputObjectSchema } from './PatientServiceCreateManyEntryRecordInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateManyEntryRecordInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => PatientServiceCreateManyEntryRecordInputObjectSchema),
        z
          .lazy(() => PatientServiceCreateManyEntryRecordInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PatientServiceCreateManyEntryRecordInputEnvelopeObjectSchema =
  Schema;
