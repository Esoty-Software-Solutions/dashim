import { z } from 'zod';
import { TenantMemberScalarWhereInputObjectSchema } from './TenantMemberScalarWhereInput.schema';
import { TenantMemberUpdateManyMutationInputObjectSchema } from './TenantMemberUpdateManyMutationInput.schema';
import { TenantMemberUncheckedUpdateManyWithoutMemberOfInputObjectSchema } from './TenantMemberUncheckedUpdateManyWithoutMemberOfInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TenantMemberUpdateManyWithWhereWithoutMemberInput> =
  z
    .object({
      where: z.lazy(() => TenantMemberScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => TenantMemberUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => TenantMemberUncheckedUpdateManyWithoutMemberOfInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TenantMemberUpdateManyWithWhereWithoutMemberInputObjectSchema =
  Schema;
