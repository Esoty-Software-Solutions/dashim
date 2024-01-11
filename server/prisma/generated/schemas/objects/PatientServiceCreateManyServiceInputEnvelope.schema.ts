import { z } from 'zod';
import { PatientServiceCreateManyServiceInputObjectSchema } from './PatientServiceCreateManyServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateManyServiceInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PatientServiceCreateManyServiceInputObjectSchema),
      z.lazy(() => PatientServiceCreateManyServiceInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const PatientServiceCreateManyServiceInputEnvelopeObjectSchema = Schema;
