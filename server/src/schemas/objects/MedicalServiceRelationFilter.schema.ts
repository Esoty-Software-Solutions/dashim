import { z } from 'zod';
import { MedicalServiceWhereInputObjectSchema } from './MedicalServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceRelationFilter> = z
  .object({
    is: z
      .lazy(() => MedicalServiceWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MedicalServiceWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MedicalServiceRelationFilterObjectSchema = Schema;
