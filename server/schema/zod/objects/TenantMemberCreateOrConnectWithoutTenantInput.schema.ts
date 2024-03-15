/* eslint-disable */
import { z } from 'zod';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberCreateWithoutTenantInputObjectSchema } from './TenantMemberCreateWithoutTenantInput.schema';
import { TenantMemberUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberCreateOrConnectWithoutTenantInput>;
export const TenantMemberCreateOrConnectWithoutTenantInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => TenantMemberCreateWithoutTenantInputObjectSchema),
            z.lazy(() => TenantMemberUncheckedCreateWithoutTenantInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
