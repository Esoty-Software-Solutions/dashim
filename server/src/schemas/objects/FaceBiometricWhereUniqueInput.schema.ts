import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.FaceBiometricWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    record: z.string().optional(),
  })
  .strict();

export const FaceBiometricWhereUniqueInputObjectSchema = Schema;
