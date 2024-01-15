import { z } from 'zod';
import { BenefitPackageWhereInputObjectSchema } from './BenefitPackageWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BenefitPackageListRelationFilter> = z
  .object({
    every: z.lazy(() => BenefitPackageWhereInputObjectSchema).optional(),
    some: z.lazy(() => BenefitPackageWhereInputObjectSchema).optional(),
    none: z.lazy(() => BenefitPackageWhereInputObjectSchema).optional(),
  })
  .strict();

export const BenefitPackageListRelationFilterObjectSchema = Schema;
