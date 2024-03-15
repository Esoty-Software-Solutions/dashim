/* eslint-disable */
import { z } from 'zod';
import { TenantUpdateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUpdateWithoutAssignedToMedicalCenterInput.schema';
import { TenantUncheckedUpdateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUncheckedUpdateWithoutAssignedToMedicalCenterInput.schema';
import { TenantCreateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantCreateWithoutAssignedToMedicalCenterInput.schema';
import { TenantUncheckedCreateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUncheckedCreateWithoutAssignedToMedicalCenterInput.schema';
import { TenantWhereInputObjectSchema } from './TenantWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantUpsertWithoutAssignedToMedicalCenterInput>;
export const TenantUpsertWithoutAssignedToMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => TenantUpdateWithoutAssignedToMedicalCenterInputObjectSchema),
            z.lazy(() => TenantUncheckedUpdateWithoutAssignedToMedicalCenterInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => TenantCreateWithoutAssignedToMedicalCenterInputObjectSchema),
            z.lazy(() => TenantUncheckedCreateWithoutAssignedToMedicalCenterInputObjectSchema),
        ]),
        where: z.lazy(() => TenantWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
