import { z } from 'zod';
import { PatientExaminationCreateManyServiceInputObjectSchema } from './PatientExaminationCreateManyServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationCreateManyServiceInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => PatientExaminationCreateManyServiceInputObjectSchema),
        z
          .lazy(() => PatientExaminationCreateManyServiceInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PatientExaminationCreateManyServiceInputEnvelopeObjectSchema =
  Schema;
