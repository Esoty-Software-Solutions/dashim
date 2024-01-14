import { z } from 'zod';
import { InsurancePolicyMedicalCenterCreateManyMedicalCenterInputObjectSchema } from './InsurancePolicyMedicalCenterCreateManyMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterCreateManyMedicalCenterInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterCreateManyMedicalCenterInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              InsurancePolicyMedicalCenterCreateManyMedicalCenterInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const InsurancePolicyMedicalCenterCreateManyMedicalCenterInputEnvelopeObjectSchema =
  Schema;
