import { z } from 'zod';
import { BeneficiaryEntityCreateManyStatusSetByInputObjectSchema } from './BeneficiaryEntityCreateManyStatusSetByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityCreateManyStatusSetByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => BeneficiaryEntityCreateManyStatusSetByInputObjectSchema),
        z
          .lazy(() => BeneficiaryEntityCreateManyStatusSetByInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryEntityCreateManyStatusSetByInputEnvelopeObjectSchema =
  Schema;
