/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUpdateWithoutMedicalCenterInput.schema';
import { MedicalServiceUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUpdateWithWhereUniqueWithoutMedicalCenterInput>;
export const MedicalServiceUpdateWithWhereUniqueWithoutMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => MedicalServiceUpdateWithoutMedicalCenterInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedUpdateWithoutMedicalCenterInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
