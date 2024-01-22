import { z } from 'zod';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithoutMemberInputObjectSchema } from './TenantMemberUpdateWithoutMemberInput.schema';
import { TenantMemberUncheckedUpdateWithoutMemberInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberUpdateWithWhereUniqueWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => TenantMemberUpdateWithoutMemberInputObjectSchema),
        z.lazy(() => TenantMemberUncheckedUpdateWithoutMemberInputObjectSchema),
      ]),
    })
    .strict();

export const TenantMemberUpdateWithWhereUniqueWithoutMemberInputObjectSchema =
  Schema;
