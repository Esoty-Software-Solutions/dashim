/* eslint-disable */
import { z } from 'zod';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithoutTenantInputObjectSchema } from './TenantMemberUpdateWithoutTenantInput.schema';
import { TenantMemberUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberUpdateWithWhereUniqueWithoutTenantInput>;
export const TenantMemberUpdateWithWhereUniqueWithoutTenantInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => TenantMemberUpdateWithoutTenantInputObjectSchema),
            z.lazy(() => TenantMemberUncheckedUpdateWithoutTenantInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
