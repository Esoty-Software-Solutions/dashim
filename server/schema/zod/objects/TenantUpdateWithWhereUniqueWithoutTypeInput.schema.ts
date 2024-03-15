/* eslint-disable */
import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithoutTypeInputObjectSchema } from './TenantUpdateWithoutTypeInput.schema';
import { TenantUncheckedUpdateWithoutTypeInputObjectSchema } from './TenantUncheckedUpdateWithoutTypeInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantUpdateWithWhereUniqueWithoutTypeInput>;
export const TenantUpdateWithWhereUniqueWithoutTypeInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => TenantUpdateWithoutTypeInputObjectSchema),
            z.lazy(() => TenantUncheckedUpdateWithoutTypeInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
