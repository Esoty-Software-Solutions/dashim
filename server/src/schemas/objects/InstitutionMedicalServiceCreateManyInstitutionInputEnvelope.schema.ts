import { z } from 'zod';
import { InstitutionMedicalServiceCreateManyInstitutionInputObjectSchema } from './InstitutionMedicalServiceCreateManyInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceCreateManyInstitutionInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => InstitutionMedicalServiceCreateManyInstitutionInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              InstitutionMedicalServiceCreateManyInstitutionInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const InstitutionMedicalServiceCreateManyInstitutionInputEnvelopeObjectSchema =
  Schema;
