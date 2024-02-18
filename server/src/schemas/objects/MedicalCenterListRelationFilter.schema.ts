import { z } from 'zod';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterListRelationFilter> = z
  .object({
    every: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
    some: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
    none: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
  })
  .strict();

export const MedicalCenterListRelationFilterObjectSchema = Schema;
