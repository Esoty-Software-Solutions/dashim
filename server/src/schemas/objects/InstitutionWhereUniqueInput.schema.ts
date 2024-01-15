import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    code: z.string().optional(),
    phoneArray: z.string().array().optional(),
    emailArray: z.string().array().optional(),
  })
  .strict();

export const InstitutionWhereUniqueInputObjectSchema = Schema;
