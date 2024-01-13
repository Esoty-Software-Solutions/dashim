import { z } from 'zod';
import { PackageMedicalServicesWhereInputObjectSchema } from './PackageMedicalServicesWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PackageMedicalServicesRelationFilter> = z
  .object({
    is: z
      .lazy(() => PackageMedicalServicesWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => PackageMedicalServicesWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const PackageMedicalServicesRelationFilterObjectSchema = Schema;
