import { z } from 'zod';
import { InsurancePolicyMedicalCentersCreateManyInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCentersCreateManyInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCentersCreateManyInsurancePolicyInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCentersCreateManyInsurancePolicyInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              InsurancePolicyMedicalCentersCreateManyInsurancePolicyInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const InsurancePolicyMedicalCentersCreateManyInsurancePolicyInputEnvelopeObjectSchema =
  Schema;
