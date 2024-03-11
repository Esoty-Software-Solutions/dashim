/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';
import { MedicalCenterUpdateWithoutServicesInputObjectSchema } from './MedicalCenterUpdateWithoutServicesInput.schema';
import { MedicalCenterUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpdateToOneWithWhereWithoutServicesInput>;
export const MedicalCenterUpdateToOneWithWhereWithoutServicesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
        data: z.union([
            z.lazy(() => MedicalCenterUpdateWithoutServicesInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedUpdateWithoutServicesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
