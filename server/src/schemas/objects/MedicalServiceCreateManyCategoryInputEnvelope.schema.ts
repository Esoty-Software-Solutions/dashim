import { z } from 'zod';
import { MedicalServiceCreateManyCategoryInputObjectSchema } from './MedicalServiceCreateManyCategoryInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCreateManyCategoryInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => MedicalServiceCreateManyCategoryInputObjectSchema),
        z.lazy(() => MedicalServiceCreateManyCategoryInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const MedicalServiceCreateManyCategoryInputEnvelopeObjectSchema = Schema;
