/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterCreateWithoutCityInputObjectSchema } from './MedicalCenterCreateWithoutCityInput.schema';
import { MedicalCenterUncheckedCreateWithoutCityInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterCreateOrConnectWithoutCityInput>;
export const MedicalCenterCreateOrConnectWithoutCityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
        create: z.union([
            z.lazy(() => MedicalCenterCreateWithoutCityInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedCreateWithoutCityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
