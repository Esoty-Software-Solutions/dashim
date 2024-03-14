/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterCreateWithoutServicesInputObjectSchema } from './MedicalCenterCreateWithoutServicesInput.schema';
import { MedicalCenterUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterCreateOrConnectWithoutServicesInput>;
export const MedicalCenterCreateOrConnectWithoutServicesInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => MedicalCenterCreateWithoutServicesInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedCreateWithoutServicesInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
