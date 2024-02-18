import { z } from 'zod';
import { BeneficiaryEntityCreateManyInsurancePolicyInputObjectSchema } from './BeneficiaryEntityCreateManyInsurancePolicyInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateManyInsurancePolicyInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(
          () => BeneficiaryEntityCreateManyInsurancePolicyInputObjectSchema,
        ),
        z
          .lazy(
            () => BeneficiaryEntityCreateManyInsurancePolicyInputObjectSchema,
          )
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryEntityCreateManyInsurancePolicyInputEnvelopeObjectSchema =
  Schema;
