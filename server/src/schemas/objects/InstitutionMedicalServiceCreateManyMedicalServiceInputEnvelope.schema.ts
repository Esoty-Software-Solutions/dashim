import { z } from 'zod';
import { InstitutionMedicalServiceCreateManyMedicalServiceInputObjectSchema } from './InstitutionMedicalServiceCreateManyMedicalServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceCreateManyMedicalServiceInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            InstitutionMedicalServiceCreateManyMedicalServiceInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              InstitutionMedicalServiceCreateManyMedicalServiceInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const InstitutionMedicalServiceCreateManyMedicalServiceInputEnvelopeObjectSchema =
  Schema;
