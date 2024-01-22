import { z } from 'zod';
import { BeneficiaryCreateManyStatusSetByInputObjectSchema } from './BeneficiaryCreateManyStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateManyStatusSetByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => BeneficiaryCreateManyStatusSetByInputObjectSchema),
        z.lazy(() => BeneficiaryCreateManyStatusSetByInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryCreateManyStatusSetByInputEnvelopeObjectSchema = Schema;
