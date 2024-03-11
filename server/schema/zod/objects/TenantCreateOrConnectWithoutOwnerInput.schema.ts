/* eslint-disable */
import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutOwnerInputObjectSchema } from './TenantCreateWithoutOwnerInput.schema';
import { TenantUncheckedCreateWithoutOwnerInputObjectSchema } from './TenantUncheckedCreateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantCreateOrConnectWithoutOwnerInput>;
export const TenantCreateOrConnectWithoutOwnerInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => TenantCreateWithoutOwnerInputObjectSchema),
            z.lazy(() => TenantUncheckedCreateWithoutOwnerInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
