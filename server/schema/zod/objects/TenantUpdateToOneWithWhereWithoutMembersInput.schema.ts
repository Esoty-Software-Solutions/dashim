/* eslint-disable */
import { z } from 'zod';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutMembersInputObjectSchema } from './TenantUpdateWithoutMembersInput.schema';
import { TenantUncheckedUpdateWithoutMembersInputObjectSchema } from './TenantUncheckedUpdateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutMembersInput>;
export const TenantUpdateToOneWithWhereWithoutMembersInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => TenantUpdateWithoutMembersInputObjectSchema),
            z.lazy(() => TenantUncheckedUpdateWithoutMembersInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
