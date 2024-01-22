import { z } from 'zod';
import { InstitutionMedicalServiceWhereInputObjectSchema } from './InstitutionMedicalServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionMedicalServiceListRelationFilter> = z
  .object({
    every: z
      .lazy(() => InstitutionMedicalServiceWhereInputObjectSchema)
      .optional(),
    some: z
      .lazy(() => InstitutionMedicalServiceWhereInputObjectSchema)
      .optional(),
    none: z
      .lazy(() => InstitutionMedicalServiceWhereInputObjectSchema)
      .optional(),
  })
  .strict();

export const InstitutionMedicalServiceListRelationFilterObjectSchema = Schema;
