/* eslint-disable */
import { z } from 'zod';
import { MedicalCenterScalarWhereInputObjectSchema } from './MedicalCenterScalarWhereInput.schema';
import { MedicalCenterUpdateManyMutationInputObjectSchema } from './MedicalCenterUpdateManyMutationInput.schema';
import { MedicalCenterUncheckedUpdateManyWithoutCityInputObjectSchema } from './MedicalCenterUncheckedUpdateManyWithoutCityInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.MedicalCenterUpdateManyWithWhereWithoutCityInput>;
export const MedicalCenterUpdateManyWithWhereWithoutCityInputObjectSchema: SchemaType = z
    .object({
        where: z.lazy(() => MedicalCenterScalarWhereInputObjectSchema),
        data: z.union([
            z.lazy(() => MedicalCenterUpdateManyMutationInputObjectSchema),
            z.lazy(() => MedicalCenterUncheckedUpdateManyWithoutCityInputObjectSchema),
        ]),
    })
    .strict() as SchemaType;
