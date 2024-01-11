import { z } from 'zod';
import { PatientExaminationWhereInputObjectSchema } from './PatientExaminationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PatientExaminationRelationFilter> = z
  .object({
    is: z
      .lazy(() => PatientExaminationWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PatientExaminationWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PatientExaminationRelationFilterObjectSchema = Schema;
