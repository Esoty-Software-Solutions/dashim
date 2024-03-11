import { z } from 'zod';
import { BenefitPackageCreateManyInsurancePolicyInputObjectSchema } from './BenefitPackageCreateManyInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageCreateManyInsurancePolicyInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => BenefitPackageCreateManyInsurancePolicyInputObjectSchema),
        z
          .lazy(() => BenefitPackageCreateManyInsurancePolicyInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BenefitPackageCreateManyInsurancePolicyInputEnvelopeObjectSchema =
  Schema;
