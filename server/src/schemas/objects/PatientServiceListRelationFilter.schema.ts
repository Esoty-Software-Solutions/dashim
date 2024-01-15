import { z } from 'zod';
import { PatientServiceWhereInputObjectSchema } from './PatientServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientServiceListRelationFilter> = z
  .object({
    every: z.lazy(() => PatientServiceWhereInputObjectSchema).optional(),
    some: z.lazy(() => PatientServiceWhereInputObjectSchema).optional(),
    none: z.lazy(() => PatientServiceWhereInputObjectSchema).optional(),
  })
  .strict();

export const PatientServiceListRelationFilterObjectSchema = Schema;
