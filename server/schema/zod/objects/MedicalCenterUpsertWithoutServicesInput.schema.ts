/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterUpdateWithoutServicesInputObjectSchema } from './MedicalCenterUpdateWithoutServicesInput.schema';
import { MedicalCenterUncheckedUpdateWithoutServicesInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutServicesInput.schema';
import { MedicalCenterCreateWithoutServicesInputObjectSchema } from './MedicalCenterCreateWithoutServicesInput.schema';
import { MedicalCenterUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutServicesInput.schema';
import { MedicalCenterWhereInputObjectSchema } from './MedicalCenterWhereInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpsertWithoutServicesInput>;
export const MedicalCenterUpsertWithoutServicesInputObjectSchema: SchemaType = z
    .object({
        update: z.union([
            z.lazy(() => MedicalCenterUpdateWithoutServicesInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedUpdateWithoutServicesInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => MedicalCenterCreateWithoutServicesInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedCreateWithoutServicesInputObjectSchema),
        ]),
        where: z.lazy(() => MedicalCenterWhereInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
