import { z } from 'zod';
import { MedicalServiceCreateManyMedicalCenterInputObjectSchema } from './MedicalServiceCreateManyMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCreateManyMedicalCenterInputEnvelope> =
  z
    .object({
      data: z.union([
        z.lazy(() => MedicalServiceCreateManyMedicalCenterInputObjectSchema),
        z
          .lazy(() => MedicalServiceCreateManyMedicalCenterInputObjectSchema)
          .array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();

export const MedicalServiceCreateManyMedicalCenterInputEnvelopeObjectSchema =
  Schema;
