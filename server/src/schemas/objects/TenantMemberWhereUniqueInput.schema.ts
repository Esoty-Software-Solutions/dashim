import { z } from 'zod';
import { TenantMemberMemberIdIdCompoundUniqueInputObjectSchema } from './TenantMemberMemberIdIdCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    memberId_id: z
      .lazy(() => TenantMemberMemberIdIdCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const TenantMemberWhereUniqueInputObjectSchema = Schema;
