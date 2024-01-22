import { z } from 'zod';
import { BeneficiaryBalanceCreateManyBeneficiaryInputObjectSchema } from './BeneficiaryBalanceCreateManyBeneficiaryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryBalanceCreateManyBeneficiaryInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => BeneficiaryBalanceCreateManyBeneficiaryInputObjectSchema),
        z
          .lazy(() => BeneficiaryBalanceCreateManyBeneficiaryInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryBalanceCreateManyBeneficiaryInputEnvelopeObjectSchema =
  Schema;
