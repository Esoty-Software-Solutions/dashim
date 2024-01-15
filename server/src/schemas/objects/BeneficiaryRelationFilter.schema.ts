import { z } from 'zod';
import { BeneficiaryWhereInputObjectSchema } from './BeneficiaryWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryRelationFilter> = z
  .object({
    is: z
      .lazy(() => BeneficiaryWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BeneficiaryWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BeneficiaryRelationFilterObjectSchema = Schema;
