import { z } from 'zod';
import { MedicalServiceCategoryWhereInputObjectSchema } from './MedicalServiceCategoryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCategoryRelationFilter> = z
  .object({
    is: z
      .lazy(() => MedicalServiceCategoryWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MedicalServiceCategoryWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MedicalServiceCategoryRelationFilterObjectSchema = Schema;
