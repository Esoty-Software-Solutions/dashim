/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutManagingTenantInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterCreateOrConnectWithoutManagingTenantInput>;
export const MedicalCenterCreateOrConnectWithoutManagingTenantInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => MedicalCenterCreateWithoutManagingTenantInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
