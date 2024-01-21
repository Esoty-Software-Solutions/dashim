import { z } from 'zod';
import { MedicalServiceTemplateWhereInputObjectSchema } from './MedicalServiceTemplateWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateRelationFilter> = z
  .object({
    is: z
      .lazy(() => MedicalServiceTemplateWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => MedicalServiceTemplateWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const MedicalServiceTemplateRelationFilterObjectSchema = Schema;
