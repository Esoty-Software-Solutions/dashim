/* eslint-disable */
import { z } from 'zod';
import { TenantUpdateWithoutMembersInputObjectSchema } from './TenantUpdateWithoutMembersInput.schema';
import { TenantUncheckedUpdateWithoutMembersInputObjectSchema } from './TenantUncheckedUpdateWithoutMembersInput.schema';
import { TenantCreateWithoutMembersInputObjectSchema } from './TenantCreateWithoutMembersInput.schema';
import { TenantUncheckedCreateWithoutMembersInputObjectSchema } from './TenantUncheckedCreateWithoutMembersInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantUpsertWithoutMembersInput>;
export const TenantUpsertWithoutMembersInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => TenantUpdateWithoutMembersInputObjectSchema),
            z.lazy(() => TenantUncheckedUpdateWithoutMembersInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => TenantCreateWithoutMembersInputObjectSchema),
            z.lazy(() => TenantUncheckedCreateWithoutMembersInputObjectSchema),
        ]),
        where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
