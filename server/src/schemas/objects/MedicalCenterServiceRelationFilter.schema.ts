import { z } from 'zod';
import { MedicalCenterServiceWhereInputObjectSchema } from './MedicalCenterServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceRelationFilter> = z
  .object({
    is: z
      .lazy(() => MedicalCenterServiceWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MedicalCenterServiceWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MedicalCenterServiceRelationFilterObjectSchema = Schema;
