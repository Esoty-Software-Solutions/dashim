import { z } from 'zod';
import { InstitutionMedicalCeneterServiceCreateManyMedicalCenterServiceInputObjectSchema } from './InstitutionMedicalCeneterServiceCreateManyMedicalCenterServiceInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalCeneterServiceCreateManyMedicalCenterServiceInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            InstitutionMedicalCeneterServiceCreateManyMedicalCenterServiceInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              InstitutionMedicalCeneterServiceCreateManyMedicalCenterServiceInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const InstitutionMedicalCeneterServiceCreateManyMedicalCenterServiceInputEnvelopeObjectSchema =
  Schema;
