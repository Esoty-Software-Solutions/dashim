/* eslint-disable */
import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutTypeInputObjectSchema } from './TenantCreateWithoutTypeInput.schema';
import { TenantUncheckedCreateWithoutTypeInputObjectSchema } from './TenantUncheckedCreateWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantCreateOrConnectWithoutTypeInput>;
export const TenantCreateOrConnectWithoutTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => TenantCreateWithoutTypeInputObjectSchema),
            z.lazy(() => TenantUncheckedCreateWithoutTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
