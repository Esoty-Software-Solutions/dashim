import { z } from 'zod';
import { BeneficiaryCreateManyRelationshipInputObjectSchema } from './BeneficiaryCreateManyRelationshipInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateManyRelationshipInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => BeneficiaryCreateManyRelationshipInputObjectSchema),
        z
          .lazy(() => BeneficiaryCreateManyRelationshipInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryCreateManyRelationshipInputEnvelopeObjectSchema =
  Schema;
