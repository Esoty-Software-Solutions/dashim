/* eslint-disable */
import { z } from 'zod';
import { TenantMemberScalarWhereInputObjectSchema } from './TenantMemberScalarWhereInput.schema';
import { TenantMemberUpdateManyMutationInputObjectSchema } from './TenantMemberUpdateManyMutationInput.schema';
import { TenantMemberUncheckedUpdateManyWithoutTenantInputObjectSchema } from './TenantMemberUncheckedUpdateManyWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberUpdateManyWithWhereWithoutTenantInput>;
export const TenantMemberUpdateManyWithWhereWithoutTenantInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantMemberScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => TenantMemberUpdateManyMutationInputObjectSchema),
            z.lazy(() => TenantMemberUncheckedUpdateManyWithoutTenantInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
