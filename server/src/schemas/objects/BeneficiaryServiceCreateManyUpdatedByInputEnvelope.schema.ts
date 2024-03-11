import { z } from 'zod';
import { BeneficiaryServiceCreateManyUpdatedByInputObjectSchema } from './BeneficiaryServiceCreateManyUpdatedByInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceCreateManyUpdatedByInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => BeneficiaryServiceCreateManyUpdatedByInputObjectSchema),
        z
          .lazy(() => BeneficiaryServiceCreateManyUpdatedByInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryServiceCreateManyUpdatedByInputEnvelopeObjectSchema =
  Schema;
