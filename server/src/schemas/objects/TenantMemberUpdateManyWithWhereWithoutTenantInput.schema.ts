import { z } from 'zod';
import { TenantMemberScalarWhereInputObjectSchema } from './TenantMemberScalarWhereInput.schema';
import { TenantMemberUpdateManyMutationInputObjectSchema } from './TenantMemberUpdateManyMutationInput.schema';
import { TenantMemberUncheckedUpdateManyWithoutMembersInputObjectSchema } from './TenantMemberUncheckedUpdateManyWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberUpdateManyWithWhereWithoutTenantInput> =
  z
    .object({
      where: z.lazy(() => TenantMemberScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TenantMemberUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => TenantMemberUncheckedUpdateManyWithoutMembersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantMemberUpdateManyWithWhereWithoutTenantInputObjectSchema =
  Schema;
