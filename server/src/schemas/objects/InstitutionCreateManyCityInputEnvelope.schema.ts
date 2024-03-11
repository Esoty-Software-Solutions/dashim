import { z } from 'zod';
import { InstitutionCreateManyCityInputObjectSchema } from './InstitutionCreateManyCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionCreateManyCityInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => InstitutionCreateManyCityInputObjectSchema),
      z.lazy(() => InstitutionCreateManyCityInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const InstitutionCreateManyCityInputEnvelopeObjectSchema = Schema;
