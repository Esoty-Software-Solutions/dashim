import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    phone: z.string().array().optional(),
    email: z.string().array().optional(),
    managingTenantId: z.string().optional(),
  })
  .strict();

export const MedicalCenterWhereUniqueInputObjectSchema = Schema;
