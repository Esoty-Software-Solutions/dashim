import { z } from 'zod';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithoutTenantInputObjectSchema } from './TenantMemberUpdateWithoutTenantInput.schema';
import { TenantMemberUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberUpdateWithWhereUniqueWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TenantMemberUpdateWithoutTenantInputObjectSchema),
        z.lazy(() => TenantMemberUncheckedUpdateWithoutTenantInputObjectSchema),
      ]),
    })
    .strict();

export const TenantMemberUpdateWithWhereUniqueWithoutTenantInputObjectSchema =
  Schema;
