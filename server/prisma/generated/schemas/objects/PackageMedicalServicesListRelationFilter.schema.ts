import { z } from 'zod';
import { PackageMedicalServicesWhereInputObjectSchema } from './PackageMedicalServicesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesListRelationFilter> = z
  .object({
    every: z
      .lazy(() => PackageMedicalServicesWhereInputObjectSchema)
      .optional(),
    some: z.lazy(() => PackageMedicalServicesWhereInputObjectSchema).optional(),
    none: z.lazy(() => PackageMedicalServicesWhereInputObjectSchema).optional(),
  })
  .strict();

export const PackageMedicalServicesListRelationFilterObjectSchema = Schema;
