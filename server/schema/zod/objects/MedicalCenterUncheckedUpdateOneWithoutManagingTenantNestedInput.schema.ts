/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutManagingTenantInput.schema';
import { MedicalCenterCreateOrConnectWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutManagingTenantInput.schema';
import { MedicalCenterUpsertWithoutManagingTenantInputObjectSchema } from './MedicalCenterUpsertWithoutManagingTenantInput.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterUpdateToOneWithWhereWithoutManagingTenantInputObjectSchema } from './MedicalCenterUpdateToOneWithWhereWithoutManagingTenantInput.schema';
import { MedicalCenterUpdateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUpdateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedUpdateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutManagingTenantInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUncheckedUpdateOneWithoutManagingTenantNestedInput>;
export const MedicalCenterUncheckedUpdateOneWithoutManagingTenantNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => MedicalCenterCreateWithoutManagingTenantInputObjectSchema),
                z.lazy(() => MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => MedicalCenterCreateOrConnectWithoutManagingTenantInputObjectSchema).optional(),
        upsert: z.lazy(() => MedicalCenterUpsertWithoutManagingTenantInputObjectSchema).optional(),
        disconnect: z.union([z.boolean(), z.lazy(() => MedicalCenterWhereInputObjectSchema)]).optional(),
        delete: z.union([z.boolean(), z.lazy(() => MedicalCenterWhereInputObjectSchema)]).optional(),
        connect: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => MedicalCenterUpdateToOneWithWhereWithoutManagingTenantInputObjectSchema),
                z.lazy(() => MedicalCenterUpdateWithoutManagingTenantInputObjectSchema),
                z.lazy(() => MedicalCenterUncheckedUpdateWithoutManagingTenantInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
