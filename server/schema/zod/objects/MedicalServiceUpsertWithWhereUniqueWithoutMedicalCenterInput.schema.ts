/* eslint-disable */
import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUpdateWithoutMedicalCenterInput.schema';
import { MedicalServiceUncheckedUpdateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutMedicalCenterInput.schema';
import { MedicalServiceCreateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceCreateWithoutMedicalCenterInput.schema';
import { MedicalServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutMedicalCenterInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalServiceUpsertWithWhereUniqueWithoutMedicalCenterInput>;
export const MedicalServiceUpsertWithWhereUniqueWithoutMedicalCenterInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => MedicalServiceUpdateWithoutMedicalCenterInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedUpdateWithoutMedicalCenterInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => MedicalServiceCreateWithoutMedicalCenterInputObjectSchema),
            z.lazy(() => MedicalServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
