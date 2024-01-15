import { z } from 'zod';
import { InstitutionMedicalCeneterServiceCreateManyInstitutionInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateManyInstitutionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceCreateManyInstitutionInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceCreateManyInstitutionInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              InstitutionMedicalCeneterServiceCreateManyInstitutionInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const InstitutionMedicalCeneterServiceCreateManyInstitutionInputEnvelopeObjectSchema =
  Schema;
