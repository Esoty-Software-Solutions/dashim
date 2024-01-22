import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberMemberIdIdCompoundUniqueInput> = z
  .object({
    memberId: z.string(),
    id: z.string(),
  })
  .strict();

export const TenantMemberMemberIdIdCompoundUniqueInputObjectSchema = Schema;
