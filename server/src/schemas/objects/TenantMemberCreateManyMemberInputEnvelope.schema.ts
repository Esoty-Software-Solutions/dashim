import { z } from 'zod';
import { TenantMemberCreateManyMemberInputObjectSchema } from './TenantMemberCreateManyMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberCreateManyMemberInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => TenantMemberCreateManyMemberInputObjectSchema),
      z.lazy(() => TenantMemberCreateManyMemberInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();

export const TenantMemberCreateManyMemberInputEnvelopeObjectSchema = Schema;
