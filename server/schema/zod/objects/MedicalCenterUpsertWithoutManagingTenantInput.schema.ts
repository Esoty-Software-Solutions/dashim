/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterUpdateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUpdateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedUpdateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutManagingTenantInput.schema';
import { MedicalCenterCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterCreateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutManagingTenantInput.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpsertWithoutManagingTenantInput>;
export const MedicalCenterUpsertWithoutManagingTenantInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => MedicalCenterUpdateWithoutManagingTenantInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedUpdateWithoutManagingTenantInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => MedicalCenterCreateWithoutManagingTenantInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedCreateWithoutManagingTenantInputObjectSchema),
        ]),
        where: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
