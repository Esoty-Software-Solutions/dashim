/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterCreateWithoutServicesInputObjectSchema } from './MedicalCenterCreateWithoutServicesInput.schema';
import { MedicalCenterUncheckedCreateWithoutServicesInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutServicesInput.schema';
import { MedicalCenterCreateOrConnectWithoutServicesInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutServicesInput.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterCreateNestedOneWithoutServicesInput>;
export const MedicalCenterCreateNestedOneWithoutServicesInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => MedicalCenterCreateWithoutServicesInputObjectSchema),
                z.lazy(() => MedicalCenterUncheckedCreateWithoutServicesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => MedicalCenterCreateOrConnectWithoutServicesInputObjectSchema).optional(),
        connect: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema).optional(),
    })
    .strict() as SchemaType;
