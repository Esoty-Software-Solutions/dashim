/* eslint-disable */
import { z } from 'zod';
import { TenantTypeEnumWhereInputObjectSchema } from './TenantTypeEnumWhereInput.schema';
import { TenantTypeEnumUpdateWithoutTenantInputObjectSchema } from './TenantTypeEnumUpdateWithoutTenantInput.schema';
import { TenantTypeEnumUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantTypeEnumUncheckedUpdateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantTypeEnumUpdateToOneWithWhereWithoutTenantInput>;
export const TenantTypeEnumUpdateToOneWithWhereWithoutTenantInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantTypeEnumWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => TenantTypeEnumUpdateWithoutTenantInputObjectSchema),
            z.lazy(() => TenantTypeEnumUncheckedUpdateWithoutTenantInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
