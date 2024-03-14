/* eslint-disable */
import { z } from 'zod';
import { TenantMemberWhereUniqueInputObjectSchema } from './TenantMemberWhereUniqueInput.schema';
import { TenantMemberUpdateWithoutTenantInputObjectSchema } from './TenantMemberUpdateWithoutTenantInput.schema';
import { TenantMemberUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedUpdateWithoutTenantInput.schema';
import { TenantMemberCreateWithoutTenantInputObjectSchema } from './TenantMemberCreateWithoutTenantInput.schema';
import { TenantMemberUncheckedCreateWithoutTenantInputObjectSchema } from './TenantMemberUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantMemberUpsertWithWhereUniqueWithoutTenantInput>;
export const TenantMemberUpsertWithWhereUniqueWithoutTenantInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantMemberWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => TenantMemberUpdateWithoutTenantInputObjectSchema),
            z.lazy(() => TenantMemberUncheckedUpdateWithoutTenantInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => TenantMemberCreateWithoutTenantInputObjectSchema),
            z.lazy(() => TenantMemberUncheckedCreateWithoutTenantInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
