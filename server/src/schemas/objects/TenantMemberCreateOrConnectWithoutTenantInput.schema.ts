import { z } from 'zod';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutTenantInputObjectSchema } from './TenantMemberCreateWithoutTenantInput.schema';
import { TenantMemberUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TenantMemberCreateWithoutTenantInputObjectSchema),
        z.lazy(() => TenantMemberUncheckedCreateWithoutTenantInputObjectSchema),
      ]),
    })
    .strict();

export const TenantMemberCreateOrConnectWithoutTenantInputObjectSchema = Schema;
