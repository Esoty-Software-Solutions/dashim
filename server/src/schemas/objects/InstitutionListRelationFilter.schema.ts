import { z } from 'zod';
import { InstitutionWhereInputObjectSchema } from './InstitutionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionListRelationFilter> = z
  .object({
    every: z.lazy(() => InstitutionWhereInputObjectSchema).optional(),
    some: z.lazy(() => InstitutionWhereInputObjectSchema).optional(),
    none: z.lazy(() => InstitutionWhereInputObjectSchema).optional(),
  })
  .strict();

export const InstitutionListRelationFilterObjectSchema = Schema;
