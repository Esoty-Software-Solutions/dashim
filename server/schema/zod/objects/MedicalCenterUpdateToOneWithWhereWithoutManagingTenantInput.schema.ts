/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { MedicalCenterUpdateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUpdateWithoutManagingTenantInput.schema';
import { MedicalCenterUncheckedUpdateWithoutManagingTenantInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutManagingTenantInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpdateToOneWithWhereWithoutManagingTenantInput>;
export const MedicalCenterUpdateToOneWithWhereWithoutManagingTenantInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => MedicalCenterUpdateWithoutManagingTenantInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedUpdateWithoutManagingTenantInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
