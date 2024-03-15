/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceCreateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceCreateWithoutMedicalCenterInput.schema';
import { MedicalServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceCreateOrConnectWithoutMedicalCenterInput>;
export const MedicalServiceCreateOrConnectWithoutMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => MedicalServiceCreateWithoutMedicalCenterInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
