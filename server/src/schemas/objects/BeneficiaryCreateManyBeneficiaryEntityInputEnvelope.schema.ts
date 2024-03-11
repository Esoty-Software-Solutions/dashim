import { z } from 'zod';
import { BeneficiaryCreateManyBeneficiaryEntityInputObjectSchema } from './BeneficiaryCreateManyBeneficiaryEntityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateManyBeneficiaryEntityInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => BeneficiaryCreateManyBeneficiaryEntityInputObjectSchema),
        z
          .lazy(() => BeneficiaryCreateManyBeneficiaryEntityInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const BeneficiaryCreateManyBeneficiaryEntityInputEnvelopeObjectSchema =
  Schema;
