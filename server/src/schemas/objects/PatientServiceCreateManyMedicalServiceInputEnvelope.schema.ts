import { z } from 'zod';
import { PatientServiceCreateManyMedicalServiceInputObjectSchema } from './PatientServiceCreateManyMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateManyMedicalServiceInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => PatientServiceCreateManyMedicalServiceInputObjectSchema),
        z
          .lazy(() => PatientServiceCreateManyMedicalServiceInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PatientServiceCreateManyMedicalServiceInputEnvelopeObjectSchema =
  Schema;
