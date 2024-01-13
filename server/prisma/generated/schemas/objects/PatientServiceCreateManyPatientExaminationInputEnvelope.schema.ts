import { z } from 'zod';
import { PatientServiceCreateManyPatientExaminationInputObjectSchema } from './PatientServiceCreateManyPatientExaminationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceCreateManyPatientExaminationInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => PatientServiceCreateManyPatientExaminationInputObjectSchema,
        ),
        z
          .lazy(
            () => PatientServiceCreateManyPatientExaminationInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const PatientServiceCreateManyPatientExaminationInputEnvelopeObjectSchema =
  Schema;
