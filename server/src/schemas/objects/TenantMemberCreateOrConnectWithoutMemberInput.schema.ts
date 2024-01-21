import { z } from 'zod';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutMemberInputObjectSchema } from './TenantMemberCreateWithoutMemberInput.schema';
import { TenantMemberUncheckedCreateWithoutMemberInputObjectSchema } from './TenantMemberUncheckedCreateWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TenantMemberCreateWithoutMemberInputObjectSchema),
        z.lazy(() => TenantMemberUncheckedCreateWithoutMemberInputObjectSchema),
      ]),
    })
    .strict();

export const TenantMemberCreateOrConnectWithoutMemberInputObjectSchema = Schema;
