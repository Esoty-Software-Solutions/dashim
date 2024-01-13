import { z } from 'zod';
import { InsurancePolicyMedicalCentersCreateManyMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCentersCreateManyMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersCreateManyMedicalCenterInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersCreateManyMedicalCenterInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              InsurancePolicyMedicalCentersCreateManyMedicalCenterInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const InsurancePolicyMedicalCentersCreateManyMedicalCenterInputEnvelopeObjectSchema =
  Schema;
