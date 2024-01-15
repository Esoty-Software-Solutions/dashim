import { z } from 'zod';
import { InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputObjectSchema } from './InsurancePolicyMedicalCenterCreateManyInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () =>
            InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputObjectSchema,
        ),
        z
          .lazy(
            () =>
              InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const InsurancePolicyMedicalCenterCreateManyInsurancePolicyInputEnvelopeObjectSchema =
  Schema;
