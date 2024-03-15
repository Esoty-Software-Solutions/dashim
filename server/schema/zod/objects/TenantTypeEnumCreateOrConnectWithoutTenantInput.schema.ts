/* eslint-disable */
import { z } from 'zod';
import { TenantTypeEnumWhereUniqueInputObjectSchema } from './TenantTypeEnumWhereUniqueInput.schema';
import { TenantTypeEnumCreateWithoutTenantInputObjectSchema } from './TenantTypeEnumCreateWithoutTenantInput.schema';
import { TenantTypeEnumUncheckedCreateWithoutTenantInputObjectSchema } from './TenantTypeEnumUncheckedCreateWithoutTenantInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantTypeEnumCreateOrConnectWithoutTenantInput>;
export const TenantTypeEnumCreateOrConnectWithoutTenantInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantTypeEnumWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => TenantTypeEnumCreateWithoutTenantInputObjectSchema),
            z.lazy(() => TenantTypeEnumUncheckedCreateWithoutTenantInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
