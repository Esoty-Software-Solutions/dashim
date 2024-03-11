/* eslint-disable */
import { z } from 'zod';
import { TenantTypeEnumUpdateWithoutTenantInputObjectSchema } from './TenantTypeEnumUpdateWithoutTenantInput.schema';
import { TenantTypeEnumUncheckedUpdateWithoutTenantInputObjectSchema } from './TenantTypeEnumUncheckedUpdateWithoutTenantInput.schema';
import { TenantTypeEnumCreateWithoutTenantInputObjectSchema } from './TenantTypeEnumCreateWithoutTenantInput.schema';
import { TenantTypeEnumUncheckedCreateWithoutTenantInputObjectSchema } from './TenantTypeEnumUncheckedCreateWithoutTenantInput.schema';
import { TenantTypeEnumWhereInputObjectSchema } from './TenantTypeEnumWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantTypeEnumUpsertWithoutTenantInput>;
export const TenantTypeEnumUpsertWithoutTenantInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => TenantTypeEnumUpdateWithoutTenantInputObjectSchema),
            z.lazy(() => TenantTypeEnumUncheckedUpdateWithoutTenantInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => TenantTypeEnumCreateWithoutTenantInputObjectSchema),
            z.lazy(() => TenantTypeEnumUncheckedCreateWithoutTenantInputObjectSchema),
        ]),
        where: z.lazy(() => TenantTypeEnumWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
