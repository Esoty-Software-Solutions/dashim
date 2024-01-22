import { z } from 'zod';
import { MedicalServiceCreateManyTemplateInputObjectSchema } from './MedicalServiceCreateManyTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCreateManyTemplateInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => MedicalServiceCreateManyTemplateInputObjectSchema),
        z.lazy(() => MedicalServiceCreateManyTemplateInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const MedicalServiceCreateManyTemplateInputEnvelopeObjectSchema = Schema;
