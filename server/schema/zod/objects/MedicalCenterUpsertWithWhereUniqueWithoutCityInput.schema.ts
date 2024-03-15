/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';
import { MedicalCenterUpdateWithoutCityInputObjectSchema } from './MedicalCenterUpdateWithoutCityInput.schema';
import { MedicalCenterUncheckedUpdateWithoutCityInputObjectSchema } from './MedicalCenterUncheckedUpdateWithoutCityInput.schema';
import { MedicalCenterCreateWithoutCityInputObjectSchema } from './MedicalCenterCreateWithoutCityInput.schema';
import { MedicalCenterUncheckedCreateWithoutCityInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpsertWithWhereUniqueWithoutCityInput>;
export const MedicalCenterUpsertWithWhereUniqueWithoutCityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
        update: z.union([
            z.lazy(() => MedicalCenterUpdateWithoutCityInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedUpdateWithoutCityInputObjectSchema),
        ]),
        create: z.union([
            z.lazy(() => MedicalCenterCreateWithoutCityInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedCreateWithoutCityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
