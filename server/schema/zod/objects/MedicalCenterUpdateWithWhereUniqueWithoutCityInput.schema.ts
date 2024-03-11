/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterUpdateWithoutCityInputObjectSchema } from './MedicalCenterUpdateWithoutCityInput.schema';
import { MedicalCenterUncheckedUpdateWithoutCityInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpdateWithWhereUniqueWithoutCityInput>;
export const MedicalCenterUpdateWithWhereUniqueWithoutCityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
        data: z.union([
            z.lazy(() => MedicalCenterUpdateWithoutCityInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedUpdateWithoutCityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
