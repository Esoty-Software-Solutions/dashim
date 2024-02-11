import { z } from 'zod';
import { BeneficiaryEntityCreateManyCityInputObjectSchema } from './BeneficiaryEntityCreateManyCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateManyCityInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BeneficiaryEntityCreateManyCityInputObjectSchema),
      z.lazy(() => BeneficiaryEntityCreateManyCityInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BeneficiaryEntityCreateManyCityInputEnvelopeObjectSchema = Schema;
