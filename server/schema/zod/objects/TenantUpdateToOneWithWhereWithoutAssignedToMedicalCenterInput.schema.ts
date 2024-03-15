/* eslint-disable */
import { z } from 'zod';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';
import { TenantUpdateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUpdateWithoutAssignedToMedicalCenterInput.schema';
import { TenantUncheckedUpdateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUncheckedUpdateWithoutAssignedToMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantUpdateToOneWithWhereWithoutAssignedToMedicalCenterInput>;
export const TenantUpdateToOneWithWhereWithoutAssignedToMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => TenantUpdateWithoutAssignedToMedicalCenterInputObjectSchema),
            z.lazy(() => TenantUncheckedUpdateWithoutAssignedToMedicalCenterInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
