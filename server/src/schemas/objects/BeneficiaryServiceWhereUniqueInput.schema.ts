import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.BeneficiaryServiceWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    reviewStatusId: z.string().optional(),
  })
  .strict();

export const BeneficiaryServiceWhereUniqueInputObjectSchema = Schema;
