/* eslint-disable */
import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantUpdateWithoutOwnerInputObjectSchema } from './TenantUpdateWithoutOwnerInput.schema';
import { TenantUncheckedUpdateWithoutOwnerInputObjectSchema } from './TenantUncheckedUpdateWithoutOwnerInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantUpdateWithWhereUniqueWithoutOwnerInput>;
export const TenantUpdateWithWhereUniqueWithoutOwnerInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => TenantUpdateWithoutOwnerInputObjectSchema),
            z.lazy(() => TenantUncheckedUpdateWithoutOwnerInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
