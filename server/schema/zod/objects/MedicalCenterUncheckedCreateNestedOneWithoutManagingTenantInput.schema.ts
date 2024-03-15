/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutManagingTenantInput.schema';
import { MedicalCenterCreateOrConnectWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutManagingTenantInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUncheckedCreateNestedOneWithoutManagingTenantInput>;
export const MedicalCenterUncheckedCreateNestedOneWithoutManagingTenantInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => MedicalCenterCreateWithoutManagingTenantInputObjectSchema),
                z.lazy(() => MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => MedicalCenterCreateOrConnectWithoutManagingTenantInputObjectSchema).optional(),
        connect: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
