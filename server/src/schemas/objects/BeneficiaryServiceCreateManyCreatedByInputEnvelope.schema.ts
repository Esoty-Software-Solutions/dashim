import { z } from 'zod';
import { BeneficiaryServiceCreateManyCreatedByInputObjectSchema } from './BeneficiaryServiceCreateManyCreatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceCreateManyCreatedByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => BeneficiaryServiceCreateManyCreatedByInputObjectSchema),
        z
          .lazy(() => BeneficiaryServiceCreateManyCreatedByInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryServiceCreateManyCreatedByInputEnvelopeObjectSchema =
  Schema;
