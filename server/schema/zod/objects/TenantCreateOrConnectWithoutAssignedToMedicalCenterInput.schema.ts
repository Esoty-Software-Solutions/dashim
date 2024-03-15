/* eslint-disable */
import { z } from 'zod';
import { TenantWhereUniqueInputObjectSchema } from './TenantWhereUniqueInput.schema';
import { TenantCreateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantCreateWithoutAssignedToMedicalCenterInput.schema';
import { TenantUncheckedCreateWithoutAssignedToMedicalCenterInputObjectSchema } from './TenantUncheckedCreateWithoutAssignedToMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantCreateOrConnectWithoutAssignedToMedicalCenterInput>;
export const TenantCreateOrConnectWithoutAssignedToMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => TenantWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => TenantCreateWithoutAssignedToMedicalCenterInputObjectSchema),
            z.lazy(() => TenantUncheckedCreateWithoutAssignedToMedicalCenterInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
