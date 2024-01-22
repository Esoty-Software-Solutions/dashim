import { z } from 'zod';
import { MedicalServiceWhereInputObjectSchema } from './MedicalServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceListRelationFilter> = z
  .object({
    every: z.lazy(() => MedicalServiceWhereInputObjectSchema).optional(),
    some: z.lazy(() => MedicalServiceWhereInputObjectSchema).optional(),
    none: z.lazy(() => MedicalServiceWhereInputObjectSchema).optional(),
  })
  .strict();

export const MedicalServiceListRelationFilterObjectSchema = Schema;
