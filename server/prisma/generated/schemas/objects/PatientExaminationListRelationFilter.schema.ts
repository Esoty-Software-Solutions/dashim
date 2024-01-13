import { z } from 'zod';
import { PatientExaminationWhereInputObjectSchema } from './PatientExaminationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationListRelationFilter> = z
  .object({
    every: z.lazy(() => PatientExaminationWhereInputObjectSchema).optional(),
    some: z.lazy(() => PatientExaminationWhereInputObjectSchema).optional(),
    none: z.lazy(() => PatientExaminationWhereInputObjectSchema).optional(),
  })
  .strict();

export const PatientExaminationListRelationFilterObjectSchema = Schema;
