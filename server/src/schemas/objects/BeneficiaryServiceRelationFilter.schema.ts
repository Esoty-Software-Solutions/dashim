import { z } from 'zod';
import { BeneficiaryServiceWhereInputObjectSchema } from './BeneficiaryServiceWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceRelationFilter> = z
  .object({
    is: z
      .lazy(() => BeneficiaryServiceWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => BeneficiaryServiceWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const BeneficiaryServiceRelationFilterObjectSchema = Schema;
