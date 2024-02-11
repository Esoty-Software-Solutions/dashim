import { z } from 'zod';
import { BeneficiaryEntityWhereInputObjectSchema } from './BeneficiaryEntityWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryEntityRelationFilter> = z
  .object({
    is: z
      .lazy(() => BeneficiaryEntityWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BeneficiaryEntityWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BeneficiaryEntityRelationFilterObjectSchema = Schema;
