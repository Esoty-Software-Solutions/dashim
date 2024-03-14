/* eslint-disable */
import { z } from 'zod';
import { TenantMemberScalarWhereInputObjectSchema } from './TenantMemberScalarWhereInput.schema';
import { TenantMemberUpdateManyMutationInputObjectSchema } from './TenantMemberUpdateManyMutationInput.schema';
import { TenantMemberUncheckedUpdateManyWithoutMemberInputObjectSchema } from './TenantMemberUncheckedUpdateManyWithoutMemberInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberUpdateManyWithWhereWithoutMemberInput>;
export const TenantMemberUpdateManyWithWhereWithoutMemberInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantMemberScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => TenantMemberUpdateManyMutationInputObjectSchema),
            z.lazy(() => TenantMemberUncheckedUpdateManyWithoutMemberInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
