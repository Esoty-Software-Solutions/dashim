/* eslint-disable */
import { z } from 'zod';
import { TenantTypeEnumCreateWithoutTenantInputObjectSchema } from './TenantTypeEnumCreateWithoutTenantInput.schema';
import { TenantTypeEnumUncheckedCreateWithoutTenantInputObjectSchema } from './TenantTypeEnumUncheckedCreateWithoutTenantInput.schema';
import { TenantTypeEnumCreateOrConnectWithoutTenantInputObjectSchema } from './TenantTypeEnumCreateOrConnectWithoutTenantInput.schema';
import { TenantTypeEnumWhereUniqueInputObjectSchema } from './TenantTypeEnumWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantTypeEnumCreateNestedOneWithoutTenantInput>;
export const TenantTypeEnumCreateNestedOneWithoutTenantInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => TenantTypeEnumCreateWithoutTenantInputObjectSchema),
                z.lazy(() => TenantTypeEnumUncheckedCreateWithoutTenantInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => TenantTypeEnumCreateOrConnectWithoutTenantInputObjectSchema).optional(),
        connect: z.lazy(() => TenantTypeEnumWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
