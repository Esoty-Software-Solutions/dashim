/* eslint-disable */
import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutMembersInputObjectSchema } from './TenantCreateWithoutMembersInput.schema';
import { TenantUncheckedCreateWithoutMembersInputObjectSchema } from './TenantUncheckedCreateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantCreateOrConnectWithoutMembersInput>;
export const TenantCreateOrConnectWithoutMembersInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => TenantCreateWithoutMembersInputObjectSchema),
            z.lazy(() => TenantUncheckedCreateWithoutMembersInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
