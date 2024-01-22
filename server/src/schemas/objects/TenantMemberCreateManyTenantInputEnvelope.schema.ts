import { z } from 'zod';
import { TenantMemberCreateManyTenantInputObjectSchema } from './TenantMemberCreateManyTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberCreateManyTenantInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TenantMemberCreateManyTenantInputObjectSchema),
      z.lazy(() => TenantMemberCreateManyTenantInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TenantMemberCreateManyTenantInputEnvelopeObjectSchema = Schema;
