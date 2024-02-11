import { z } from 'zod';
import { MedicalCenterCreateManyCityInputObjectSchema } from './MedicalCenterCreateManyCityInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateManyCityInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => MedicalCenterCreateManyCityInputObjectSchema),
      z.lazy(() => MedicalCenterCreateManyCityInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const MedicalCenterCreateManyCityInputEnvelopeObjectSchema = Schema;
