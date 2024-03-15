/* eslint-disable */
import { z } from 'zod';
import { TenantCreateWithoutMembersInputObjectSchema } from './TenantCreateWithoutMembersInput.schema';
import { TenantUncheckedCreateWithoutMembersInputObjectSchema } from './TenantUncheckedCreateWithoutMembersInput.schema';
import { TenantCreateOrConnectWithoutMembersInputObjectSchema } from './TenantCreateOrConnectWithoutMembersInput.schema';
import { TenantUpsertWithoutMembersInputObjectSchema } from './TenantUpsertWithoutMembersInput.schema';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateToOneWithWhereWithoutMembersInputObjectSchema } from './TenantUpdateToOneWithWhereWithoutMembersInput.schema';
import { TenantUpdateWithoutMembersInputObjectSchema } from './TenantUpdateWithoutMembersInput.schema';
import { TenantUncheckedUpdateWithoutMembersInputObjectSchema } from './TenantUncheckedUpdateWithoutMembersInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantUpdateOneRequiredWithoutMembersNestedInput>;
export const TenantUpdateOneRequiredWithoutMembersNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => TenantCreateWithoutMembersInputObjectSchema),
                z.lazy(() => TenantUncheckedCreateWithoutMembersInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => TenantCreateOrConnectWithoutMembersInputObjectSchema).optional(),
        upsert: z.lazy(() => TenantUpsertWithoutMembersInputObjectSchema).optional(),
        connect: z.lazy(() => TenantWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => TenantUpdateToOneWithWhereWithoutMembersInputObjectSchema),
                z.lazy(() => TenantUpdateWithoutMembersInputObjectSchema),
                z.lazy(() => TenantUncheckedUpdateWithoutMembersInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
