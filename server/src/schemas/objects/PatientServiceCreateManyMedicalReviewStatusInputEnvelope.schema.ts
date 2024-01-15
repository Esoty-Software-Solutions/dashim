import { z } from 'zod';
import { PatientServiceCreateManyMedicalReviewStatusInputObjectSchema } from './PatientServiceCreateManyMedicalReviewStatusInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateManyMedicalReviewStatusInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => PatientServiceCreateManyMedicalReviewStatusInputObjectSchema,
        ),
        z
          .lazy(
            () => PatientServiceCreateManyMedicalReviewStatusInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PatientServiceCreateManyMedicalReviewStatusInputEnvelopeObjectSchema =
  Schema;
