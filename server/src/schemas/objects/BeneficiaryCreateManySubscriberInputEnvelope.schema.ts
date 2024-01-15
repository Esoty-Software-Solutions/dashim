import { z } from 'zod';
import { BeneficiaryCreateManySubscriberInputObjectSchema } from './BeneficiaryCreateManySubscriberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryCreateManySubscriberInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => BeneficiaryCreateManySubscriberInputObjectSchema),
      z.lazy(() => BeneficiaryCreateManySubscriberInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const BeneficiaryCreateManySubscriberInputEnvelopeObjectSchema = Schema;
