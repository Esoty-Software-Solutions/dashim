/* eslint-disable */
import { z } from 'zod';
import { TenantCreateWithoutMembersInputObjectSchema } from './TenantCreateWithoutMembersInput.schema';
import { TenantUncheckedCreateWithoutMembersInputObjectSchema } from './TenantUncheckedCreateWithoutMembersInput.schema';
import { TenantCreateOrConnectWithoutMembersInputObjectSchema } from './TenantCreateOrConnectWithoutMembersInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantCreateNestedOneWithoutMembersInput>;
export const TenantCreateNestedOneWithoutMembersInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => TenantCreateWithoutMembersInputObjectSchema),
                z.lazy(() => TenantUncheckedCreateWithoutMembersInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutMembersInputObjectSchema).optional(),
        connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
